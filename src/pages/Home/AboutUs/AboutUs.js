import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <h2 className="text-2xl font-medium mb-6 text-center text-gray-800">About Us</h2>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/2 px-4 mb-8">
                            <img src="https://via.placeholder.com/500x500" alt="About Us" className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="w-1/2 px-4 mb-8">
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit libero. Vestibulum auctor lacinia massa, vel blandit enim euismod eu. Sed euismod, magna quis bibendum malesuada, leo ligula tristique diam, a congue mauris sem ac justo.</p>
                            <p className="text-gray-600 mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tristique, nisi a bibendum molestie, risus nulla congue velit, vel blandit enim enim euismod lectus.</p>
                            <p className="text-gray-600 mb-4">Integer dapibus enim id urna tempor bibendum. Proin non malesuada lacus. Integer sit amet mi laoreet, pharetra enim eget, rutrum lacus.</p>
                            <div className="flex justify-center mt-8">
                                <a href="#" className="bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600">Learn More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
