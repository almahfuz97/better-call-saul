import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import RatingStar from '../../utils/RatingStar';
import '../Home/Banner/Banner.css'
import gallary from '../../assets/bg.jpg'

export default function ServiceDetailsInfo({ service, review, totalReviews }) {
    const { service_name, description, price, rating, service_img, _id, description2 } = service;
    const desArr = description2 && description2.split('+');
    return (
        <div className='grid grid-cols-12 mt-8'>
            <div className=' col-span-12 md:col-span-6 relative   flex items-center justify-center'>

                <PhotoProvider>
                    <PhotoView src={service_img}>
                        <img src={service_img} onError={(e) => {
                            if (e.target.src !== gallary) {
                                e.target.src = gallary;
                            }
                        }} alt="" className='w-full border-4 h-[512px] top-0 rounded rounded-br-none rounded-tr-none rounded-bl-none md:rounded' />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className=' col-span-12 md:col-span-6 px-4 pb-4  overflow-y-scroll h-[512px] border-4 pt-4 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-bold text-xl'>{service_name}</h1>

                    </div>
                    <RatingStar rating={rating}></RatingStar>
                    <div className='mb-5'>
                        <small className='mr-4 opacity-80'>Price: <span className='text-yellow-400 font-bold'>${price}</span></small>
                        <small>Total Ratings: <span className=' text-yellow-400 font-bold'>{totalReviews}</span></small>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div className='mt-8'>
                        {
                            review &&
                            desArr?.map((item, index) => {

                                return (
                                    index === 0
                                        ?
                                        <p key={item} className=' font-bold mb-1'> {item}:</p>
                                        :
                                        <li key={item}>{item}</li>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
