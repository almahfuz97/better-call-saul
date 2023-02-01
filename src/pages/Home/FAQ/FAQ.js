import React from 'react'

export default function FAQ() {
    return (
        <div>
            <section className=" my-16">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-center">Find out about the questions that are frequently asked.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What kind of cases does your firm handle?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Our firm specializes in criminal defense and Immigration law, but we also handle a variety of other legal matters. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How much do you charge for your services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Our fees vary depending on the complexity of the case and the amount of time required to resolve it. During a consultation, we can provide a more accurate estimate of the cost of our services. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you offer free consultations?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Yes, we offer free consultations to prospective clients. During this meeting, we will discuss your case and answer any questions you may have. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    )
}
