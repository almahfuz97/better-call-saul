import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import useTitle from '../../hooks/useTitle';
import Spin from '../../shared/Spinner/Spin';
import SuccesfulModal from '../../utils/Modals/SuccesfulModal';
import MyReviewCard from './MyReviewCard';

export default function MyReviews() {
    const { user, loading } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState();
    const [spinner, setSpinner] = useState(true);
    const [isDeleted, setIsDeleted] = useState('');

    // set title
    useTitle('My Reviews')
    // set valid/invalid modal
    const modal = isDeleted === '0'
        ? <SuccesfulModal icon='0' str="Review deleted successfully!" clicked={true} />
        :
        isDeleted === '1'
            ?
            <SuccesfulModal icon='1' str='Something went wrong!' clicked={true} />
            :
            <SuccesfulModal clicked={false} />


    const handleNewData = (reviews) => {
        if (reviews) {
            setMyReviews(reviews);
            setIsDeleted('0');
        }
        else {
            setIsDeleted('1');
        }

        setTimeout(() => {
            setIsDeleted('');
        }, 4000);
    }

    useEffect(() => {
        fetch(`https://service-a11-server.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
                if (user?.email) setSpinner(false)
            })
            .catch(err => console.log(err))
    }, [user?.email])

    if (loading) return <Spin />
    if (!user?.email) return <Navigate to='/login' />
    if (spinner) return <Spin />

    if (myReviews?.length === 0) {
        return (
            <div className=' h-52 justify-center flex mt-36'>
                {
                    // show modal for last delete
                    modal
                }
                <h1 className=' text-lg font-bold'>No reviews were added!</h1>
            </div>
        )
    }
    return (
        <div className='mt-8 px-4 md:px-20'>
            {
                // show modal
                modal
            }
            <div className='flex justify-center mb-16'>
                <h2 className=' font-bold'>My Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    myReviews.map(review => <MyReviewCard newData={handleNewData} key={review._id} review={review} />)
                }
            </div>
        </div>
    )
}
