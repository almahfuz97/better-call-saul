import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React, { useContext } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import pfp from '../../assets/profile.svg'

export default function Header() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => localStorage.removeItem('service-token'))
            .catch(err => {
                alert("There was a problem signing out!");
                console.log(err)
            })
    }
    const profileImg = <div className='relative'>
        <div className=' z-50 w-12 h-12 rounded-full mr-4'>
            <Avatar alt="" img={user?.photoURL} rounded={true} />
        </div>
        <div className='absolute -z-10 top-0 w-12 h-12 rounded-full mr-4'>
            <Avatar img={pfp} rounded={true} />
        </div>
    </div>


    return (
        <div className='py-4 px-4'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                        Better Call Saul
                    </span>
                </Navbar.Brand>

                <div className={`flex md:order-2 ${!user && 'md:hidden'}`}>
                    <div className={`${user ? 'flex' : 'hidden'}`}>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={profileImg
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                    {user?.displayName}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user?.email}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => { logOut() }}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>

                    </div>
                    <Navbar.Toggle />

                </div>

                <Navbar.Collapse>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? " text-red-500" : ''}
                    >
                        Home
                    </NavLink>

                    {
                        !user?.email ?
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? " text-red-500" : ''}
                            >
                                Login
                            </NavLink>
                            :
                            <NavLink
                                onClick={handleLogOut}
                            >
                                Logout
                            </NavLink>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}