import { Card, Dropdown } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import Spin from '../../../shared/Spinner/Spin';
import TestimonialsCard from './TestimonialsCard'

export default function Testimonials() {
    const [testinmon, setTestimon] = useState();
    const [spinner, setSpinner] = useState(true);


    useEffect(() => {
        fetch('https://service-a11-server.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => {
                setSpinner(false)
                setTestimon(data)
            })
    }, [])

    if (spinner) return <Spin />
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                testinmon.map(tes => <TestimonialsCard key={tes._id} tes={tes} />)
            }




        </div>
    )
}
