import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return { fontWeight: isActive ? 'bold' : 'normal' }
    }

    return (
        <nav className='bg-blue-300 py-2 text-center'>
            <NavLink className= 'px-5' style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink className= 'px-5' style={navLinkStyles} to='products'>Products</NavLink>
            <NavLink className= 'px-5' style={navLinkStyles} to='users'>Users</NavLink>
            <NavLink className= 'px-5' style={navLinkStyles} to='about'>About</NavLink>
            <NavLink className= 'px-5' style={navLinkStyles} to='github'>Github</NavLink>
        </nav>
    )
}

export default Navbar