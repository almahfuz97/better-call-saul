import { Button } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './Banner/Banner'
import ServicesCard from '../../shared/ServicesCard/ServicesCard';
import './Home.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spin from '../../shared/Spinner/Spin';
import useTitle from '../../hooks/useTitle';
import Testimonials from './Testimonials/Testimonials';
import Numbers from './Numbers/Numbers';
import Promise from './Promise/Promise';
import FAQ from './FAQ/FAQ';
import AboutUs from './AboutUs/AboutUs';
import RecentBlog from './RecentBlog/RecentBlog';

export default function Home() {
    const [services, setServices] = useState();
    const [spinner, setSpinner] = useState(true);
    const { user, loading } = useContext(AuthContext);

    useTitle('Home')

    useEffect(() => {

        fetch('https://service-a11-server.vercel.app/home')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setSpinner(false);
            })
            .catch((err) => setSpinner(false))
    }, [])

    // if (spinner) return <Spin />
    return (
        <div className=''>
            <Banner />

            <div className='mt-20 px-4 md:px-20'>
                <div className='flex justify-center ' id='services'>
                    <div className=' bg-img  px-4 py-4 '>
                        <h3 className='text-center font-bold text-2xl md:text-3xl mb-1'>Services</h3>
                        <p className='text-center opacity-80'>Explore our services to see what you need.</p>
                    </div>
                </div>
                <div className='mt-20'>
                    {spinner && <Spin />}
                </div>
                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        services?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
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

            <Numbers />

            <div className='my-20 px-4 md:px-20'>
                <div className='flex justify-center mb-8'>
                    <h1 className=' text-2xl font-semibold sm:text-4xl text-center'>What Our Clients Say About Our Services</h1>

                </div>
                <Testimonials />
            </div>
            <RecentBlog />
            <AboutUs />
            <FAQ />
            <Promise></Promise>

            <div className='mt-24 px-4 md:px-20 space-y-4 bg-slate-50 py-20'>
                <div className=' flex justify-center'>
                    <h1 className=' font-bold text-2xl tracking-wider'>Top notch client support</h1>
                </div>
                <div className=' flex justify-center'>
                    <p className='text-center w-4/5 to-center opacity-50 px-12'>Help Desk with one on one email and ticket support and dedicated support staff ready to assist you. Response times usually less than 8 hours.</p>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <button className='border border-purple-500 hover:text-purple-500 px-8 py-4 rounded shadow drop-shadow-lg font-bold'>
                        Follow us on twitter
                    </button>
                    <button className='border border-purple-500 px-8 py-4 hover:text-purple-500 rounded shadow drop-shadow-lg font-bold'>
                        Get Support Via Help Desk
                    </button>
                </div>

            </div>
        </div>
    )
}