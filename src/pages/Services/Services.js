import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServicesCard from '../../shared/ServicesCard/ServicesCard';

export default function Services() {
    const services = useLoaderData();
    return (
        <div className='mx-4 md:mx-20 mt-4'>
            <div className='flex justify-center'>
                <div>
                    <h3 className='text-center font-bold text-xl md:text-3xl mb-1'>Services</h3>
                    <p className='text-center text-xs md:text-base opacity-50'>Explore our services to see what you need.</p>
                </div>
            </div>
            <div className='mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    )
}
