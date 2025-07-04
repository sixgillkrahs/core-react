import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

/**
  trả về parameter trên url hiện tại.

  ```tsx
  import { useQueryString } from "../../hooks";

  function SomeComponent() {
    const query = useQueryString();
    console.log(query);

    return (
      // ...
    );
  }
  ```
 */
function useQueryString() {
    const location = useLocation();
    const queryString = useMemo(
        () => qs.parse(location.search),
        [location.search]
    );

    return JSON.stringify(queryString);
}

export default useQueryString;
