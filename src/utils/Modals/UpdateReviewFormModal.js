import { Button, Modal } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewForm from '../../shared/ReviewUtils/ReviewForm';
import Spin from '../../shared/Spinner/Spin';

export default function UpdateReviewFormModal({ clicked, closed, review, updatedReview }) {
    const { user, loading } = useContext(AuthContext);
    const [visible, setVisible] = useState();
    const { register, handleSubmit, formState: { errors }, watch, formState, submittedData, reset } = useForm();
    const { service_name, _id, reviewText, rating, displayName, createdAt, profileURL, email } = review;
    const [newRating, setNewRating] = useState();
    const [err, setErr] = useState('');
    const [spinner, setSpinner] = useState(false);

    // resetting form
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ reviewText: '', rating: '5' });
        }
    }, [formState, submittedData, reset]);

    // watch on change rating
    useEffect(() => {
        setNewRating(watch('rating'));
    }, [watch('rating')])

    useEffect(() => {
        setVisible(clicked);
    }, [clicked])

    const onSubmit = (data) => {
        setErr('')
        let updatedDoc = {};
        console.log(data)
        if (reviewText === data.reviewText && rating === data.rating) {
            setErr('You did not change anything!');
            return;
        }

        if (reviewText !== data.reviewText) updatedDoc.reviewText = data.reviewText;
        if (rating !== data.rating) updatedDoc.rating = data.rating;

        console.log(updatedDoc);
        // set sppiner
        setSpinner(true);
        fetch(`https://service-a11-server.vercel.app/update/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.modifiedCount > 0) {
                    console.log(data.result.modifiedCount + 'document updated')
                    updatedReview(data.review);
                    closed()
                    setSpinner(false)
                    setVisible(false)
                }
                else {
                    closed()
                    setSpinner(false)
                    setVisible(false);
                    updatedReview(false)
                }
            })
            .catch(err => {
                closed()
                setSpinner(false)
                setVisible(false);
                updatedReview(false)
                console.log(err);
            }
            )
    }

    if (loading) return <Spin />
    return (
        <React.Fragment>
            <Modal
                show={visible}
                size="md"
                popup={true}
                onClose={() => {
                    setVisible(false)
                    closed(false)
                    setErr('')
                }
                }
            >
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            spinner && <Spin />
                        }
                        {
                            <p className=' text-red-500 mb-2'>{err}</p>
                        }
                        <h4 className='mb-4 font-bold'>{service_name}</h4>
                        <textarea defaultValue={reviewText} {...register('reviewText', { required: true })} className=' min-h-[100px] w-full rounded-lg' placeholder='write your review...' />
                        <div className='flex items-center mt-4' >
                            <p className='mr-2 font-bold'>Rating:</p>
                            <p className='mr-4'>{newRating}</p>
                            <select defaultValue={rating} {...register('rating', { required: true })} className='rounded h-4 p-3.5 '>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className='flex justify-end w-full'>
                                <button type='submit' className='border px-2 md:px-4 py-2 ml-2 rounded shadow font-semibold drop-shadow text-green-500 hover:bg-slate-50'>Update</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
