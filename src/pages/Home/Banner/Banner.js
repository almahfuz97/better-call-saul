import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div className='img-gradient relative'>
            <img src="https://i.ibb.co/2sZDYdY/saulgoodman.jpg" alt="" className='w-full' />

            <div className='flex justify-center md:justify-start'>
                <h1 className=' text-white w-1/2  top-1/4 text-center text-md sm:text-lg md:mx-12 md:top-1/4 md:left-36 md:w-1/3 font-bold z-10 absolute  md:text-start  text-md  md:text-2xl lg:text-5xl xl:text-5xl'>AN IMMIGRATION & CRIMINAL DEFENSE LAWYER.</h1>
            </div>
            <div className='flex justify-center md:justify-start'>
                <p className=' text-white z-10 top-1/3 mt-16 sm:mt-8 md:mx-12 text-xs text-center md:text-start md:w-1/3 md:top-1/3 md:left-36 md:text-base md:mt-16 lg:top-1/2 lg:mt-16 xl:top-1/3   xl:mt-20 absolute opacity-80'>We keep families together. <span className='hidden md:flex'> If you or a loved one are facing possible jail time or deportation, you should immediately obtain an experienced lawyer to protect your interests.</span></p>
            </div>

        </div >
    )
}
