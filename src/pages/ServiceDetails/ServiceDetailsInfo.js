import React from 'react'

export default function ServiceDetailsInfo({ service, review }) {
    const { service_name, description, price, rating, service_img, _id, description2 } = service;
    const desArr = description2 && description2.split('+');
    return (
        <div className='grid grid-cols-12 mt-8'>
            <div className=' col-span-12 md:col-span-6 relative   flex items-center justify-center'>
                <img src={service_img} alt="" className='w-full border-4 h-[512px] top-0 rounded rounded-br-none rounded-tr-none' />
            </div>
            <div className=' col-span-12 md:col-span-6 px-4 pb-4  overflow-y-scroll h-[512px] border-4 pt-4 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-bold text-xl'>{service_name}</h1>

                    </div>
                    <div className="mt-2.5 mb-2.5 flex items-center">
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
                    <div className='mb-5'>
                        <small className='mr-4 opacity-80'>Price: <span className='text-yellow-400 font-bold'>${price}</span></small>
                        <small>Total Ratings: <span className=' text-yellow-400 font-bold'>`1005`+</span></small>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div className='mt-8'>
                        {
                            review &&
                            desArr?.map((item, index) => {

                                return (
                                    index === 0
                                        ?
                                        <p key={item} className=' font-bold mb-1'> {item}:</p>
                                        :
                                        <li key={item}>{item}</li>
                                )


                            }
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
