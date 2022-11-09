import React from 'react'
import pfp from '../../assets/profile.svg'
import RatingStar from '../../utils/RatingStar';


export default function ReviewCard({ review }) {
    const { profileURL, displayName, reviewText, rating, } = review;

    // profileIMage
    const profileImg =
        <div className='relative flex items-center'>
            <img src={profileURL} onError={(e) => {
                if (e.target.src !== pfp) {
                    e.target.onError = null;
                    e.target.src = pfp
                }
            }} className=' bg-transparent z-10 cursor-pointer w-8 h-8 rounded-full mr-4' />
        </div>

    return (
        <div className='mx-20 mb-8'>
            <div className='flex '>
                <div className='relative '>
                    {profileImg}
                </div>
                <div className='w-full  rounded'>
                    <h3 className='font-semibold'>{displayName}</h3>
                </div>
            </div>
            <RatingStar rating={rating} />

            <div>
                <small className='opacity-80'>{reviewText}</small>
            </div>
        </div>
    )
}
