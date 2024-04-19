import React from 'react'
import Header from './src/Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/Footer/Footer'
function Latout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Latout
