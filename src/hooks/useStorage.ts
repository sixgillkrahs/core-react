import { useCallback, useState, useEffect } from 'react';

/**
 * tạo một hook để tạo local storage.
 * @param key
 * @param defaultValue
 * @returns
 *
 * ```tsx
 * import { useLocalStorage } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [value, setValue, remove] = useLocalStorage("key", "defaultValue");
 *   return <div>{value}</div>;
 * }
 * ```
 */
export function useLocalStorage(key: string, defaultValue: unknown) {
  return useStorage(key, defaultValue, window.localStorage);
}

/**
 * tạo một hook để tạo session storage.
 * @param key
 * @param defaultValue
 * @returns
 *
 * ```tsx
 * import { useSessionStorage } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [value, setValue, remove] = useSessionStorage("key", "defaultValue");
 *   return <div>{value}</div>;
 * }
 * ```
 */
export function useSessionStorage(key: string, defaultValue: unknown) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

/**
 * tạo một hook để tạo storage.
 * @param key
 * @param defaultValue
 * @param storageObject
 * @returns
 *
 * ```tsx
 * import { useStorage } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [value, setValue, remove] = useStorage("key", "defaultValue", window.localStorage);
 *   return <div>{value}</div>;
 * }
 * ```
 */
function useStorage(
  key: string,
  defaultValue: unknown,
  storageObject: Storage,
) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
