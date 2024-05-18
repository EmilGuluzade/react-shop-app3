
import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/footer'
import Header from '../../layout/admin/Header/Header'

const AdminRoot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default AdminRoot
