import { Spinner } from 'flowbite-react'
import React from 'react'

export default function Spin() {
    return (
        <div className='flex justify-center'>
            <Spinner
                color="success"
                aria-label="Success spinner example"
                size='lg'
            />
        </div>
    )
}
