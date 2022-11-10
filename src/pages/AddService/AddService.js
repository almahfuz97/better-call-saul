import { registerVersion } from 'firebase/app'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import addImg from '../../assets/imageUpload.png'
import useTitle from '../../hooks/useTitle';
import Spin from '../../shared/Spinner/Spin';
import SuccesfulModal from '../../utils/Modals/SuccesfulModal';

export default function AddService() {
    const { register, handleSubmit, reset, formState, submittedData } = useForm();
    const [spinner, setSpinner] = useState(false);
    const [success, setSuccess] = useState('');

    // set title
    useTitle('Add Service')
    // resetting form
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, submittedData, reset]);

    const onSubmit = data => {
        console.log(data);
        setSpinner(true);
        const serviceData = {
            service_name: data.title,
            description: data.description,
            description2: null,
            service_img: data.photoURL,
            price: data.price,
            rating: parseInt(data.rating),
            createdAt: Date.now(),
        }

        fetch(`https://service-a11-server.vercel.app/addservice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setSuccess('0');
                }
                else {
                    setSuccess('1');
                }

                setTimeout(() => {
                    setSuccess('');
                }, 4000);

                setSpinner(false);
            })
            .catch(err => {
                setSpinner(false)
                setSuccess('1');
                console.log(err)
            })

        console.log(serviceData)
    }
    return (
        <div className='mt-8'>
            <div className='fixed right-1/2'>
                {
                    spinner && <Spin />
                }
            </div>
            <div>
                {
                    success === '0'
                        ?
                        <SuccesfulModal icon='0' str='Service added successfully!' clicked={true} />
                        :
                        success === '1'
                            ?
                            <SuccesfulModal icon='1' str='Something went wrong!' clicked={true} />
                            :
                            <SuccesfulModal clicked={false} />

                }
            </div>
            <div>
                <div className='font-bold text-2xl md:text-3xl flex justify-center'>
                    <h1>Add Service</h1>
                </div>
                <div className=' flex justify-center mt-1'>
                    <div className='h-1 bg-red-600 w-12 md:w-12 lg:w-12'></div>
                </div>
            </div>

            {/* form */}
            <div className='flex justify-center'>
                <div className='mt-16 w-3/4 max-w-4xl'>
                    <div>
                        <h1 className=' font-bold text-xl'>Service Information</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-8 '>
                                <label className='relative' htmlFor="title">
                                    Service Title
                                    <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                </label> <br />
                                <input
                                    type="text"
                                    {...register('title', { required: true })}
                                    className="rounded-lg mt-4 w-full"
                                />
                            </div>
                            {/* amount and location */}
                            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                                <div className='mt-8 w-full md:w-1/2 '>
                                    <label className='relative' htmlFor="title">
                                        Service Amount
                                        <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                    </label> <br />
                                    <input
                                        type="number"
                                        {...register('price', { required: true })}
                                        className="rounded-lg mt-4 w-full"
                                    />
                                </div>
                                <div className='mt-8 w-full md:w-1/2 '>
                                    <label className='relative' htmlFor="title">
                                        Service Location
                                        <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                    </label> <br />
                                    <input
                                        type="text"
                                        {...register('location', { required: true })}
                                        className="rounded-lg mt-4 w-full"
                                    />
                                </div>
                            </div>

                            {/* details description */}
                            <div className='mt-16'>
                                <div>
                                    <h1 className=' font-bold text-xl'>Details Information</h1>
                                </div>
                                <div className='mt-8'>
                                    <label className='relative' htmlFor="">
                                        Descriptions
                                        <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                    </label> <br />
                                    <textarea {...register('description', { required: true })} className=' w-full mt-4 rounded-lg min-h-[200px]' placeholder='Description'></textarea>
                                </div>

                                <div className='mt-8'>
                                    <label className='relative' htmlFor="title">
                                        Ratings
                                        <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                    </label> <br />
                                    <select {...register('rating', { required: true })} defaultValue='5' name="" id="" className=' w-full rounded-lg mt-4'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            {/* photo */}
                            <div className='mt-16'>
                                <div>
                                    <h1 className=' font-bold text-xl'>Photo</h1>
                                </div>

                                <div className=' h-[200px] flex justify-center items-center cursor-pointer border-4 mt-8  border-dashed rounded-lg'>
                                    <img src={addImg} alt="" />
                                </div>
                                <div className='flex justify-center mt-8'>
                                    <p>Or</p>
                                </div>
                                <div className='mt-8 w-full '>
                                    <label className='relative' htmlFor="title">
                                        Photo Url
                                        <sup className='ml-2 font-bold text-xl absolute text-red-600'>*</sup>
                                    </label> <br />
                                    <input
                                        {...register('photoURL', { required: true })}
                                        type="text"
                                        className="rounded-lg mt-4 w-full"
                                        placeholder='Photo Url'
                                    />
                                </div>
                                <div className='mt-8'>
                                    <button type='submit' className='border py-4 px-8 bg-red-500 rounded-lg font-bold text-white'>Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
