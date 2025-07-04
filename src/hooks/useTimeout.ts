import { useCallback, useEffect, useRef } from "react";


/**
  Cuộn lên trên đầu trang.

  ```tsx
  import { useTimeout } from "../../hooks";

  function SomeComponent() {
    useScrollToTop();

    return (
      // ...
    );
  }
  ```
 */
export default function useTimeout(callback: () => void, delay: number) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return {
        reset,
        clear,
    };
}
