import { useTitle } from '@/hooks';
import { listUser } from '@/services/user/api';
import { useEffect, useState } from 'react';

const HomePage = () => {
  useTitle('Trang chủ');
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const resp = await listUser();
    setData(resp);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>HomePage</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
};

export default HomePage;
