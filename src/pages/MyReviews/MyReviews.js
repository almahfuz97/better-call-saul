import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import Spin from '../../shared/Spinner/Spin';
import MyReviewCard from './MyReviewCard';

export default function MyReviews() {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://service-a11-server.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyReviews(data);
                if (user?.email) setLoading(false)
            })
            .catch(err => console.log(err))
    }, [user?.email])

    if (loading) return <Spin />
    if (myReviews?.length === 0) {
        return (
            <div className=' h-52 justify-center flex mt-36'>
                <h1 className=' text-lg font-bold'>No reviews were added!</h1>
            </div>
        )
    }
    return (
        <div className='mt-8 px-4 md:px-20'>
            <div className='flex justify-center mb-16'>
                <h2 className=' font-bold'>My Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    myReviews.map(review => <MyReviewCard key={review._id} review={review} />)
                }
            </div>
        </div>
    )
}
