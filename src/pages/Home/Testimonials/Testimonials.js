import { Card, Dropdown } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Spin from '../../../shared/Spinner/Spin';
import TestimonialsCard from './TestimonialsCard'


export default function Testimonials() {
    const [testinmon, setTestimon] = useState();
    const [spinner, setSpinner] = useState(true);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
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
        <div className=''>
            <Slider {...settings}>
                {
                    testinmon.map(tes => <TestimonialsCard key={tes._id} tes={tes} />)
                }
            </Slider>


        </div>
    )
}
