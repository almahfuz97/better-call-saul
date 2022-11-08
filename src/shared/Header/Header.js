import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React, { useContext } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

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
    return (
        <div className='py-4'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >

                    <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                        Better Call Saul
                    </span>
                </Navbar.Brand>
                <div className={`${user ? 'flex' : 'hidden'}  md:order-2`}>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
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
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
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
                                className={({ isActive }) => isActive ? " text-red-500" : ''}
                            >
                                Logout
                            </NavLink>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}