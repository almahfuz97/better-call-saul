import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import pfp from '../../assets/profile.svg'

export default function ReviewForm() {
    const { user } = useContext(AuthContext);

    const profileImg =
        <div className='relative flex items-center'>
            <img src={user?.photoURL} onError={(e) => {
                if (e.target.src !== pfp) {
                    e.target.src = pfp
                }
            }} className=' bg-transparent z-10 cursor-pointer w-12 h-12 rounded-full mr-4' />
            {/* <img src={pfp} className='absolute top-0 w-12 h-12 cursor-pointer rounded-full mr-4' /> */}
        </div>

    return (
        <div className='flex justify-center'>
            <div className='flex  w-full md:w-1/2 '>
                <div className='mr-4'>
                    {profileImg}
                </div>
                <div className='w-full '>
                    <textarea className=' min-h-[100px] w-full rounded' placeholder='write your review...' />
                    <div className='flex items-center mt-4' >
                        <p className='mr-2 font-bold'>Rating:</p>
                        <p className='mr-4'>5</p>
                        <select name="rating" className='rounded h-4 p-4 '>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">4</option>
                            <option value="2">5</option>
                        </select>
                        <div className='flex justify-end w-full'>
                            <button type='submit' className='border px-4 py-2 ml-2 rounded shadow drop-shadow hover:bg-slate-50'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
