import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/6538031-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
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
            </ul>
            <button className='md:hidden text-4xl text-white drop-shadow-[0_0_10px_#8A2BE2]'><MenuIcon fontSize='inherit'/></button>
        </div>
    )
}

export default Navbar