import React, { useEffect, useState } from 'react'
import RatingStar from '../../utils/RatingStar';
import delIcon from '../../assets/delete.png'
import editIcon from '../../assets/edit.png'
import ConfirmModal from '../../utils/Modals/ConfirmModal';
import Spin from '../../shared/Spinner/Spin';
import UpdateReviewFormModal from '../../utils/Modals/UpdateReviewFormModal';
import SuccesfulModal from '../../utils/Modals/SuccesfulModal';

export default function MyReviewCard({ review, newData }) {
    const { service_name, _id, reviewText, rating, displayName, createdAt, profileURL, email } = review;
    const [rev, setRev] = useState({});
    const [popup, setPopup] = useState(false);
    const [formPopup, setFormPopup] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setRev({ ...review });
    }, [review])

    // new updated review (only the updated one one)
    const handleUpdatedReview = (Review) => {
        console.log(Review)
        if (Review) {
            setSuccess('0');
            console.log(Review);
            setRev({ ...Review });
        } else {
            setSuccess('1')
        }
        setTimeout(() => {
            setSuccess('');
        }, 4000);
    }

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
                    else {
                        newData(false)
                    }

                    setSpinner(false)
                })
                .catch(err => {
                    setSpinner(false);
                    newData(false);
                })
        }
    }

    return (
        <div className='mb-4  p-4 shadow rounded-lg'>
            {
                spinner && <Spin />

            }
            {
                // show modal 
                success === '0'
                    ?
                    <SuccesfulModal icon="0" str='Review updated successfully!' clicked={true} />
                    :
                    success === '1'
                        ?
                        <SuccesfulModal icon="1" str='Something went wrong!' clicked={true} />
                        :
                        <SuccesfulModal clicked={false} />
            }
            <div>
                <div className='flex items-center justify-between mb-2'>
                    {
                        formPopup
                            ?
                            <UpdateReviewFormModal
                                updatedReview={handleUpdatedReview}
                                review={review} closed={() => setFormPopup(false)}
                                clicked={true}
                            />
                            :
                            <UpdateReviewFormModal
                                review={review}
                                clicked={false}
                            />
                    }
                    <div className='flex items-center'>
                        <h3 className=' font-bold mr-4'>
                            {service_name} <br />
                        </h3>
                        <div onClick={() => setFormPopup(true)} className='flex hover:scale-105 cursor-pointer duration-100'>
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
                    <RatingStar rating={rev?.rating ? rev.rating : rating} />
                </div>
                <div>
                    <p>
                        {rev?.reviewText}
                    </p>
                </div>
            </div>
        </div>
    )
}
