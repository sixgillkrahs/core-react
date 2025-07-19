import { Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import SubComponent from "./hello";

const Register = () => {
  const [count, setCount] = useState<number>(0)
  const [re, setRe] = useState<number>(1)

  function fibonacci(n: number, a?: number): number {
    if (n < 2) {
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2) + (a || 0)
  }

  useEffect(() => {
    console.log("hello ef")
  }, [])

  const resp = useMemo(() => {
    console.log("hello in")
    fibonacci(40, re)
  }, [re])


  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        increase
      </Button>
      <Button onClick={() => setRe((prev) => prev + 1)}>
        increase
      </Button>
      <SubComponent input={count} />
    </div>
  );
};

export default Register;
