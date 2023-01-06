import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import awards from '../../../assets/awards.png'
import caseFile from '../../../assets/caseFile.png'
import customer from '../../../assets/customer.png'

export default function Numbers() {

    return (
        <div className=' py-40 bg-slate-50 mt-12 my-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' space-y-6 flex flex-col justify-center items-center'>
                <img src={awards} alt="" />
                <div className=' h-1 w-12 hover:bg-blue-400  duration-200 bg-slate-200'></div>
                <h2 className=' font-bold text-4xl tracking-wider'>
                    <CountUp
                        end={90}
                        duration={2}
                        enableScrollSpy={true}
                    />
                </h2>                <h2 className=' tracking-widest text-xl font-bold'>Awards & Citation</h2>
            </div>
            <div className=' space-y-6 flex flex-col justify-center items-center'>
                <img src={caseFile} alt="" />
                <div className=' h-1 w-12 hover:bg-blue-400  duration-200 bg-slate-200'></div>
                <h2 className=' font-bold text-4xl tracking-wider'>
                    <CountUp
                        end={2940}
                        duration={2}
                        enableScrollSpy={true}
                    />
                </h2>
                <h2 className=' tracking-widest text-xl font-bold'>Cases Won</h2>
            </div>
            <div className=' space-y-6 flex flex-col justify-center items-center'>
                <img src={customer} alt="" />
                <div className=' h-1 w-12 hover:bg-blue-400  duration-200 bg-slate-200'></div>
                <h2 className=' font-bold text-4xl tracking-wider'>
                    <CountUp
                        end={2500}
                        duration={2}
                        enableScrollSpy={true}

                    />
                    +
                </h2>



                <h2 className=' tracking-widest text-xl font-bold'>Clients</h2>
            </div>
        </div>
    )
}
