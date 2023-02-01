import React from 'react'

export default function RecentBlog() {
    return (
        <div>
            <div className="bg-gray-100 p-10">
                <h2 className="text-3xl font-bold text-center">Recent Blog Posts</h2>
                <div className="mt-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 mb-5 md:mb-0">
                            <div className="bg-white p-5 h-48">
                                <h3 className="text-lg font-medium">Blog Post 1</h3>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="bg-indigo-500 text-white p-2 mt-5 rounded hover:bg-indigo-600">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 md:mb-0">
                            <div className="bg-white p-5 h-48">
                                <h3 className="text-lg font-medium">Blog Post 2</h3>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="bg-indigo-500 text-white p-2 mt-5 rounded hover:bg-indigo-600">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 md:mb-0">
                            <div className="bg-white p-5 h-48">
                                <h3 className="text-lg font-medium">Blog Post 3</h3>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="bg-indigo-500 text-white p-2 mt-5 rounded hover:bg-indigo-600">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
