import { Button, Card, Tooltip } from 'flowbite-react';
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import RatingStar from '../../utils/RatingStar';

export default function ServicesCard({ service, review }) {
    const { service_name, description, price, rating, service_img, _id, description2 } = service;
    const desArr = description2 && description2.split('+');
    return (
        <div>
            <div className="">

                <Card
                >
                    <PhotoProvider>
                        <PhotoView src={service_img}>
                            <img src={service_img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <Tooltip content={service_name}>
                        <h5 className="text-md hidden md:flex font-semibold tracking-tight text-gray-900 dark:text-white">
                            {
                                service_name.length >= 25
                                    ? `${service_name.slice(0, 25)}...`
                                    : service_name
                            }
                        </h5>
                    </Tooltip>

                    <h5 className="text-md md:hidden font-semibold tracking-tight text-gray-900 dark:text-white">
                        {service_name}
                    </h5>

                    <p style={{ wordBreak: "break-all" }} className=' text-sm opacity-50'>
                        {
                            review
                                ?
                                description
                                :
                                description.length >= 100
                                    ? `${description.slice(0, 100)}...`
                                    : service_name
                        }
                    </p>
                    {
                        review &&
                        desArr?.map((item, index) => {

                            return (
                                index === 0
                                    ?
                                    <p key={item}> {item}:</p>
                                    :
                                    <li key={item}>{item}</li>
                            )


                        }
                        )
                    }

                    <RatingStar rating={rating} />
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                        {
                            review || <Link to={`/service/${_id}`}>
                                <Button
                                    color="dark"
                                >
                                    Details
                                </Button>
                            </Link>
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
}
