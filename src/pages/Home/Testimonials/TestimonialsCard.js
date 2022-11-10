import { Card, Dropdown } from 'flowbite-react'
import React from 'react'

export default function TestimonialsCard({ tes }) {
    return (
        <div>
            <Card>
                {/* <div className="flex justify-end px-4 pt-4">
                    <Dropdown
                        inline={true}
                        label=""
                    >
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div> */}
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src={tes.photoUrl}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {tes.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">

                    </span>
                    <div>
                        <p>
                            {tes.testimony}
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    )
}
