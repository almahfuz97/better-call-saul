import { Footer } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo192.png'

export default function FooterMain() {
    return (
        <Footer container={true} bgDark={true} className='mt-20  border-t-4 rounded-none'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='flex mb-4'>
                        <Footer.Brand
                            src={logo}
                            alt=""
                        />
                        <h1 className=' text-md text-black md:text-xl font-semibold'>Better Call Saul</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div className=' text-black'>
                            <Footer.Title title="Quick Menu" className='text-black' />
                            <Footer.LinkGroup col={true}>
                                <NavLink to='/services' className='text-black'>
                                    Services
                                </NavLink>
                                <NavLink to='/blog' className='text-black'>
                                    Blog
                                </NavLink>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" className='text-black' />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href='https://www.facebook.com' className='text-black'>
                                    Facebook
                                </Footer.Link>
                                <Footer.Link href="https://www.github.com/almahfuz97" className='text-black'>
                                    Github
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className='text-black' />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#" className='text-black'>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#" className='text-black'>
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Abdullah Al Mahfuz"
                        year={2022}
                    />

                </div>
            </div>
        </Footer>

    )
}
