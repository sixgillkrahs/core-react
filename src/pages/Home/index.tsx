import { useAsyncFn, useEffectOnce } from "@/hooks";
import { example } from "@/services/auth/api";
import { Button } from "antd";
import { useState } from "react";

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);
  const [state, getUser] = useAsyncFn(example, [refresh]);

  useEffectOnce(() => {
    getUser("1");
  });

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error.message}</p>}
      {state.value && <pre>{JSON.stringify(state.value, null, 2)}</pre>}
      <Button onClick={() => setRefresh(true)}>Reload</Button>
    </div>
  );
};

export default HomePage;
