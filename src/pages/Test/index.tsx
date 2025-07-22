import { useTitle } from '@/hooks';
import { getMe } from '@/services/auth/api';
import React, { useEffect, useState } from 'react'

const TestPage = () => {
    useTitle('Trang tests');
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getMe();
            setData(resp.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>TestPage</div>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default TestPage