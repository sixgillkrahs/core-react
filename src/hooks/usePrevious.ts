import { useEffect, useRef } from 'react';

/**
  trả về giá trị trước đó của state và props.

  ```tsx
  import { usePrevious } from "../../hooks";

  function SomeComponent() {
    const [value, setValue] = useState(0);
    // trả về giá trị của state value trước
    const preValue = usePrevious(value);
    const onClick = () => {
        setValue(value + 1);
    };

    return (
      <div>
        preValue: {preValue}, currentValue: {value},
        <button onClick={onClick}>bấm đi</button>
      </div>
    );
  }
  ```
 */
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
