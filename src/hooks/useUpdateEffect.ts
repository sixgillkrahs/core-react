import { useEffect, useRef } from 'react';

/**
 * tạo một hook để tạo update effect.
 * @param callback
 * @param dependencies
 * @returns
 *
 * ```tsx
 * import { useUpdateEffect } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [value, setValue] = useState("");
 *   useUpdateEffect(() => {
 *     console.log("update", value);
 *   }, [value]);
 *   return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />;
 * }
 * ```
 */
export default function useUpdateEffect(
  callback: () => void,
  dependencies: unknown[],
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
