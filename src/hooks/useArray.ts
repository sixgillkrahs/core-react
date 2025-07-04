import { useState } from "react";

/**
 * tạo một hook để tạo array.
 * @param defaultValue
 * @returns
 *
 * ```tsx
 * import { useArray } from "../../hooks";
 *
 * function SomeComponent() {
 *   const { array, set, push, filter, update, remove, clear } = useArray([1, 2, 3]);
 *   return (
 *     <div>
 *       <div>{array.join(", ")}</div>
 *       <button onClick={() => push(4)}>Push 4</button>
 *       <button onClick={() => filter((n) => n % 2 === 0)}>Filter even</button>
 *       <button onClick={() => update(1, 5)}>Update 2 to 5</button>
 *       <button onClick={() => remove(1)}>Remove 2</button>
 *       <button onClick={clear}>Clear</button>
 *     </div>
 *   );
 * }
 * ```
 */
export default function useArray(defaultValue: unknown[]) {
  const [array, setArray] = useState(defaultValue);

  function push(element: unknown) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: (element: unknown) => boolean) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: unknown) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
