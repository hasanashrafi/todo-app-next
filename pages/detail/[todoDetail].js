import DetailPage from '@/components/templates/DetailPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Index() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const id = router.query.todoDetail;

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`/api/todos/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id]); 

    if (loading) return <div className='min-h-screen flex items-center justify-center text-white text-4xl font-semibold font-Dana'>در حال بارگذاری...</div>;
    if (error) return <div className='min-h-screen flex items-center justify-center text-white text-4xl font-semibold'>Error: {error}</div>;

    return <DetailPage data={data} />;
}

export default Index;
