import { useLayoutEffect } from 'react';

/**
  Cuộn lên trên đầu trang.

  ```tsx
  import { useScrollToTop } from "../../hooks";

  function SomeComponent() {
    useScrollToTop();

    return (
      // ...
    );
  }
  ```
 */
function useScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default useScrollToTop;
