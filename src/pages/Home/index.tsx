import { useState } from "react";
import { usePrevious } from "../../hooks";

const HomePage = () => {
  const [value, setValue] = useState(0);
  const preValue = usePrevious(value);
  const onClick = () => {
    setValue(value + 1);
  };
  return (
    <div style={{ height: "2000px" }}>
      preValue: {preValue}, currentValue: {value},
      <button onClick={onClick}>bấm đi</button>
    </div>
  );
};

export default HomePage;
