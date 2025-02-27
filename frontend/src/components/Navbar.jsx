import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import icon from '../assets/6538031-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.scss'
const Navbar = () => {
    const [classname, setClassname] = useState("passive")
    const [isOpen, setIsOpen] = useState(true);
    const containerRef = useRef(null);
    const handleclassname = () => {
        if (classname === "passive") {
            setClassname("active")
        } else if (isOpen) {
            setClassname('active')
        }else{
            setClassname('passive')
        }

    }
    const location = useLocation()
    useEffect(() => { setClassname('passive') }, [location.pathname])
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false); // Close container if click is outside
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='navbar'>
            <img src={icon} alt="icon" />
            <ul ref={containerRef} className={`navitem ${classname}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Know Me</Link></li>
                <li><Link to='/specification'>Specification</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
            <button onClick={handleclassname} className='md:hidden text-4xl text-white drop-shadow-[0_0_10px_#8A2BE2]'><MenuIcon fontSize='inherit' /></button>
        </div>
    )
}

export default Navbar