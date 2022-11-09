import React, { useContext, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import fist from '../../assets/fist.png'
import 'react-photo-view/dist/react-photo-view.css';
import ServicesCard from '../../shared/ServicesCard/ServicesCard';
import { useLoaderData } from 'react-router-dom';
import { Toast } from 'flowbite-react';
import pfp from '../../assets/profile.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';
import ServiceDetailsInfo from './ServiceDetailsInfo';

export default function ServiceDetails() {
    const { user, loading } = useContext(AuthContext);
    const [toast, setToast] = useState();
    const [comment, setComment] = useState('');
    const { service, reviews } = useLoaderData();
    const handleComment = () => {

    }
    const commentOnChange = () => {

    }
    return (
        <div className='mt-8  mx-4'>
            <div className=' relative'>
                <div className=' w-full'>
                    <ServiceDetailsInfo review={true} service={service}></ServiceDetailsInfo>

                </div>
            </div>
            <div className=' md:col-span-6'>
                {
                    <Toast className={` absolute top-4 ${toast ? 'flex' : 'hidden'}`}>

                        <div className="ml-3 text-sm font-normal">
                            Review posted Successfully
                        </div>

                    </Toast>
                }
                <div>
                    <div className='flex items-center space-x-3'>
                        <div className='relative'>
                            <img src={pfp} alt="" className='absolute -z-10 top-0 w-16 h-16 rounded-full mr-4' />
                            <img src={user?.photoURL} alt="" className=' z-50 w-16 h-16 rounded-full mr-4' />

                        </div>
                        <div className=' w-4/5'>
                            <input onChange={commentOnChange} name="comment" value={comment} type="text" className='border rounded-3xl w-full' placeholder='write your review...' />
                        </div>
                    </div>
                    <div className=' flex justify-end'>
                        <button onClick={handleComment} className='border rounded-lg drop-shadow-md hover:bg-slate-50 text-end p-2 mr-12'>Post Review</button>
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-center my-6 text-xl'>Reviews</h1>
                </div>
                <div>
                    {
                        reviews && reviews.map(com => <ReviewCard key={com._id} com={com}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    )
}
