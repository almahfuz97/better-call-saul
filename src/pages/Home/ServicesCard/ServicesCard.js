import { Button, Card, Tooltip } from 'flowbite-react';
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

export default function ServicesCard({ service }) {
    const { service_name, description, price, rating, service_img, _id } = service;

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
                            description.length >= 100
                                ? `${description.slice(0, 100)}...`
                                : service_name
                        }
                    </p>

                    <div className="mt-2.5 mb-5 flex items-center">
                        {
                            // implementing ratings
                            [...Array(rating).keys()].map((r) => {
                                return (
                                    <svg
                                        key={r}
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                )
                            })
                        }


                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {rating}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                        <Link to={`/service/${_id}`}>
                            <Button
                                color="dark"
                            >
                                Details
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}
