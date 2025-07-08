import { useCallback, useRef, useState, type DependencyList } from 'react';
import useMountedState from './useMountedState';
import type { PromiseType, FunctionReturningPromise } from '@/types/index';

export type AsyncState<T> =
    | { loading: boolean; error?: undefined; value?: undefined }
    | { loading: true; error?: Error | undefined; value?: T }
    | { loading: false; error: Error; value?: undefined }
    | { loading: false; error?: undefined; value: T };

type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> = AsyncState<
    PromiseType<ReturnType<T>>
>;

export type AsyncFnReturn<T extends FunctionReturningPromise = FunctionReturningPromise> = [
    StateFromFunctionReturningPromise<T>,
    T
];

/**
 * Hook để call api.
 * @returns
 *
 * ```tsx
 * import { useCopyToClipboard } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [copyToClipboard, { value, success }] = useCopyToClipboard();
 *   return (
 *     <div>
 *       <button onClick={() => copyToClipboard("Hello, world!")}>
 *         Copy to clipboard
 *       </button>
 *       <div>{value}</div>
 *     </div>
 *   );
 * }
 * ```
 */
export default function useAsyncFn<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = [],
    initialState: StateFromFunctionReturningPromise<T> = { loading: false }
): AsyncFnReturn<T> {
    const lastCallId = useRef(0);
    const isMounted = useMountedState();
    const [state, setState] = useState<StateFromFunctionReturningPromise<T>>(initialState);

    const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
        const callId = ++lastCallId.current;

        if (!state.loading) {
            setState((prev) => ({ ...prev, loading: true }));
        }

        const promise = fn(...args) as ReturnType<T>;

        promise
            .then((value) => {
                if (isMounted() && callId === lastCallId.current) {
                    setState({ value, loading: false });
                }
                return value;
            })
            .catch((error: Error) => {
                if (isMounted() && callId === lastCallId.current) {
                    setState({ error, loading: false });
                }
                throw error; // giữ nguyên reject
            });

        return promise;
    }, deps);

    return [state, callback as unknown as T];
}
