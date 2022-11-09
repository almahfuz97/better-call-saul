import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spin from '../../shared/Spinner/Spin';

const provider = new GoogleAuthProvider();

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, createUser, logOut, updateUser, loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.from2 || '/';
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);


    const onSubmit = data => {
        console.log(data)
        setSpinner(true);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSpinner(false)

                const userInfo = {
                    displayName: data.fullName, photoURL: data.url,
                }

                updateUser(userInfo);
                navigate(from)
            })
            .catch(err => {
                setSpinner(false)
                console.log(err)
            })

    }

    if (loading) return <Spin />
    if (user) return <Navigate to='/' />
    return (
        <div className='flex justify-center mt-12 mx-4 '>
            {
                spinner && <div className='absolute top-1/2 z-10'><Spin /></div>
            }
            <div className='border p-8 rounded-lg md:w-96'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full  ">

                    <h1 className=' text-center font-bold mb-4 text-xl'>Register</h1>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="fullName"
                                value="Full Name"
                            />
                        </div>
                        <TextInput
                            name="fullName"
                            type="text"
                            placeholder='Full Name'
                            {...register('fullName', { required: true })}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            name="email"
                            type="email"
                            placeholder='Your email'
                            {...register('email', { required: true })}

                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="url"
                                value="Profile photo URL"
                            />
                        </div>
                        <TextInput
                            name="url"
                            type="text"
                            placeholder='Your photo url'
                            {...register('url', { required: true })}

                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            name="password"
                            type="password"

                            {...register('password', { required: true })}

                        />
                    </div>

                    <Button type="submit">
                        Submit
                    </Button>
                    <div className="flex items-center">
                        <small>Already have an account? <Link to='/login'><span className=' text-red-500 hover:text-red-600'>Login Here</span></Link></small>
                    </div>

                </form>
            </div>
        </div>
    )
}