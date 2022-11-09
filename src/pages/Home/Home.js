import { Button } from 'flowbite-react';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './Banner/Banner'
import ServicesCard from '../../shared/ServicesCard/ServicesCard';
import './Home.css'

export default function Home() {
    const services = useLoaderData();
    return (
        <div className=''>
            <Banner />
            <div className='mt-20 px-4 md:px-20'>
                <div className='flex justify-center' id='services'>
                    <div className=' bg-img  px-4 py-4 '>
                        <h3 className='text-center font-bold text-2xl md:text-3xl mb-1'>Services</h3>
                        <p className='text-center opacity-80'>Explore our services to see what you need.</p>
                    </div>
                </div>
                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
                <div className='flex justify-center mt-8 p-4'>
                    <Link to='/services'>
                        <Button color="light">
                            See All
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}