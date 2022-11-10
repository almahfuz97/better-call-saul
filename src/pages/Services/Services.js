import React, { useContext, useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServicesCard from '../../shared/ServicesCard/ServicesCard';
import Spin from '../../shared/Spinner/Spin';

export default function Services() {
    console.log('here')
    const [services, setServices] = useState();
    const [spinner, setSpinner] = useState(true);
    const { user, loading } = useContext(AuthContext);
    //  set title
    useTitle('Services');

    useEffect(() => {
        fetch('https://service-a11-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setSpinner(false)
                setServices(data)
            })
    }, [])

    return (
        <div className='mx-4 md:mx-20 mt-4'>
            <div className='flex justify-center'>
                <div>
                    <h3 className='text-center font-bold text-xl md:text-3xl mb-1'>Services</h3>
                    <p className='text-center text-xs md:text-base opacity-50'>Explore our services to see what you need.</p>
                </div>
            </div>
            <div className='mt-8'>
                {spinner && <Spin />}
            </div>
            <div className='mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    )
}
