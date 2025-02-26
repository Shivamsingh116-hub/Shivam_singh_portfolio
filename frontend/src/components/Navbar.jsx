import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/6538031-removebg-preview.png'
import './Navbar.scss'
const Navbar = () => {
    const [menuBtn, setMenuBtn] = useState(false)
    const handleMenuBtn = () => {
        setMenuBtn(!menuBtn)
    }
    return (
        <div className='navbar'>
            <img src={icon} alt="icon" />
            <ul className="navitem">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Know Me</Link></li>
                <li><Link to='/specification'>Specification</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                {}
            </ul>
        </div>
    )
}

export default Navbar