import { useAsyncFn } from '@/hooks';
import { example } from '@/services/auth/api';
import { Button } from 'antd';
import { useState } from 'react';

const HomePage = () => {
  const [refresh, setRefresh] = useState<number>(1);
  const [state, fetchData] = useAsyncFn(example, []);

  return (
    <div>
      {state.loading && <p>Loading…</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error.message}</p>}
      {state.value && <pre>{JSON.stringify(state.value)}</pre>}
      <Button onClick={() => fetchData('1')}>Fetch Data</Button>
      <Button onClick={() => setRefresh((prev) => prev + 1)}>Fetch Data</Button>
      <h1>{refresh}</h1>
    </div>
  );
};

export default HomePage;
