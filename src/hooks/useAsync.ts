import { useCallback, useEffect, useState } from "react";

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
export default function useAsync(
  callback: () => Promise<unknown>,
  dependencies: unknown[] = []
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<>();
  const [value, setValue] = useState<unknown>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then((value) => setValue(value))
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
