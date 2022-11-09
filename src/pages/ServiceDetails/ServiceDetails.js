import React, { useContext, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import fist from '../../assets/fist.png'
import 'react-photo-view/dist/react-photo-view.css';
import ServicesCard from '../../shared/ServicesCard/ServicesCard';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { Toast } from 'flowbite-react';
import pfp from '../../assets/profile.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../../shared/ReviewUtils/ReviewCard';
import ServiceDetailsInfo from './ServiceDetailsInfo';
import ReviewForm from '../../shared/ReviewUtils/ReviewForm';

export default function ServiceDetails() {
    const { user, loading } = useContext(AuthContext);
    const [toast, setToast] = useState();
    const [comment, setComment] = useState('');
    const { service, reviews } = useLoaderData();

    const { _id } = service;

    const location = useLocation();

    return (
        <div className='mt-8  mx-4'>
            <div className=' relative'>
                <div className=' w-full'>
                    <ServiceDetailsInfo review={true} service={service}></ServiceDetailsInfo>

                </div>
            </div>
            <div className=' mt-20 relative '>
                {
                    <Toast className={` absolute top-4 ${toast ? 'flex' : 'hidden'}`}>

                        <div className="ml-3 text-sm font-normal">
                            Review posted Successfully
                        </div>

                    </Toast>
                }
                <div>
                    {
                        user
                            ?
                            <>
                                <div className='flex justify-center mb-8 font-bold'>
                                    <h2>Write a Review</h2>
                                </div>
                                <ReviewForm serviceId={_id} />
                            </>
                            :
                            <div className='flex justify-center mb-16 '>
                                <p className='bg-gradient-to-l from-slate-100 to-red-50 p-4 text-xl rounded'><Link className='hover:text-red-700 underline text-red-500' to='/login' state={{ from: location }}>Login</Link> to write a review</p>
                            </div>
                    }
                </div>
                <div>
                    <h1 className=' font-bold text-center my-20 text-xl'>All Reviews</h1>
                </div>
                <div >
                    {
                        reviews && reviews.map(review => <ReviewCard key={review._id} com={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    )
}
