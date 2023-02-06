import React from 'react'
import law from '../../../assets/RuleofLaw.jpg'

export default function AboutUs() {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <h2 className="text-2xl font-bold mb-16 text-center text-gray-800">About Us</h2>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/2 px-4 mb-8">
                            <img src={law} alt="About Us" className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="w-1/2 px-4 mb-8">
                            <p className="text-gray-600 mb-4">With our recognized leadership in applying legal service and technology innovation, we deliver commercial advantage to clients.</p>
                            <p className="text-gray-600 mb-4">Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services, litigation and corporate risk practices.</p>
                            <p className="text-gray-600 mb-4">Integer dapibus enim id urna tempor bibendum. Proin non malesuada lacus. Integer sit amet mi laoreet, pharetra enim eget, rutrum lacus.</p>
                            <div className="flex justify-start mt-8">
                                <a href="#" className="bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600">Learn More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
