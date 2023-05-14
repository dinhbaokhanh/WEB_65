import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

const MainLayout = (props) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect (() => {
        const accessToken = localStorage.getItem('access_token');
        if(!accessToken){
            router.push('/auth/login');
        } else {
            const user = JSON.parse(accessToken);
            if(user.email){
                setLoading(false)
            } else {
                router.push('/auth/login')
            }
        }
    }, [setLoading]);
    if(loading) return <>Loading ....</>

    return (
        <div className='main_layout'>
            <Header />
            {props.children}
        </div >             


    )
}

export default MainLayout;