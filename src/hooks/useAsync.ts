import { useCallback, useEffect, useState } from 'react';

/**
 * tạo một hook để tạo async.
 * @param callback
 * @param dependencies
 * @returns
 *
 * ```tsx
 * import { useAsync } from "../../hooks";
 *
 * function SomeComponent() {
 *   const { loading, error, value } = useAsync(() => {
 *     return new Promise((resolve) => {
 *       setTimeout(() => {
 *         resolve("Hello, world!");
 *       }, 1000);
 *     });
 *   }, []);
 *   return <div>{value}</div>;
 * }
 * ```
 */
export default function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: unknown[] = [],
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [callback, ...dependencies]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
