import React, { useState } from 'react'
import RatingStar from '../../utils/RatingStar';
import delIcon from '../../assets/delete.png'
import editIcon from '../../assets/edit.png'
import ConfirmModal from '../../utils/ConfirmModal/ConfirmModal';
import Spin from '../../shared/Spinner/Spin';

export default function MyReviewCard({ review, newData }) {
    const { service_name, _id, reviewText, rating, displayName, createdAt, profileURL, email } = review;
    const [popup, setPopup] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const handleConfirm = (proceed) => {
        setPopup(false)
        if (proceed) {
            setSpinner(true);
            fetch(`https://service-a11-server.vercel.app/delete/${_id}?email=${email}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.deletedCount > 0) {
                        // send new data to parent, MyReviews
                        newData(data.reviews);
                    }
                    setSpinner(false)
                })
                .catch(err => {
                    setSpinner(false);
                })
        }
    }
    return (
        <div className='mb-4  p-4 shadow rounded-lg'>
            {
                spinner && <Spin />

            }
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
                    <img onClick={() => setPopup(true)} src={delIcon} alt="" className='w-8 h-8 drop-shadow-lg rounded-full hover:scale-105 cursor-pointer duration-200' />
                    {
                        popup && <ConfirmModal clicked={true} confirm={handleConfirm} />
                    }
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
