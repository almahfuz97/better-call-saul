import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'
import FooterMain from '../shared/Footer/FooterMain'
import Footer from '../shared/Footer/FooterMain'
import Header from '../shared/Header/Header'
import Spin from '../shared/Spinner/Spin'

export default function Main() {
    const { loading } = useContext(AuthContext);
    return (
        <div>
            <Header />
            <Outlet />
            <FooterMain />
        </div>
    )
}
