import React from 'react'
import './Home.scss'
import image from '../assets/OEMBZ20_1_-removebg-preview.png'
const Home = () => {
    return (
        <div className='home-component'>
            <div id='home-container-1'>
                <div className='left-container'>
                    <h1>I'm Shivam Singh</h1>
                    <span>सॉफ़्टवेयर Developer.</span>
                    <h1>based in INDIA</h1>
                    <a href='/Resume.pdf' download='Shivam_resume.pdf' type='application/pdf'>Download CV</a>
                </div>
                <div className='right-container'>
                   <img src={image} alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default Home