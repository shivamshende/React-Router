import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
    const navLinkStyles = ({ isActive }) => {
        return { fontWeight: isActive ? 'bold' : 'normal' }
    }
    return (
        <div className='text-center my-5'>
            <h2 className='text-red-500 text-2xl mb-2'>Our Products</h2>
            <p className='mb-10'>This page is about nested routes</p>
            <p className='text-green-700 mb-2'>Relative links for Product component</p>
            <NavLink className='px-2 py-2' style={navLinkStyles} to='featured'>Featured</NavLink>
            <NavLink className='px-2 py-2' style={navLinkStyles} to='new'>New</NavLink>
            <Outlet />
        </div>
    )
}

export default Products
