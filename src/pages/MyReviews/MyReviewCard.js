import React from 'react'
import RatingStar from '../../utils/RatingStar';
import delIcon from '../../assets/delete.png'
import editIcon from '../../assets/edit.png'

export default function MyReviewCard({ review }) {
    const { service_name, _id, reviewText, rating, displayName, createdAt, profileURL } = review;
    return (
        <div className='mb-4 p-4 shadow rounded-lg'>
            <div>
                <div className='flex items-center justify-between mb-2'>
                    {/* <img src={profileURL} alt="" className='w-12 h-12 rounded-full mr-2' /> */}
                    <div className='flex items-center'>
                        <h3 className=' font-bold mr-4'>{service_name}</h3>
                        <div className='flex hover:scale-105 cursor-pointer duration-100'>
                            <img src={editIcon} alt="" className='w-6 h-6 mr-1 drop-shadow-lg rounded-full  duration-200' />
                            <p>Edit</p>
                        </div>
                    </div>
                    <img src={delIcon} alt="" className='w-8 h-8 drop-shadow-lg rounded-full hover:scale-105 cursor-pointer duration-200' />
                </div>
                <div className='mb-4'>
                    <RatingStar rating={rating} />
                </div>
                <div>
                    <p>
                        {reviewText}
                    </p>
                </div>
            </div>
        </div>
    )
}
