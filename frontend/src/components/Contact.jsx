import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Contact = () => {
  return (
    <div className='w-full justify-center flex border border-red-500'>
      <ul className='flex w-4/5 justify-between items-center bg-blue-400 h-auto p-10 border border-red-500'>
        <li className='p-6'>
          <EmailOutlinedIcon />
          <p>Email Address</p>
          <a href='shivamsinghk116@gmail.com'>shivamsinghk116@gmail.com</a>
        </li>
        <li>
          <RingVolumeOutlinedIcon />
          <p>Phone Number</p>
          <a href='+919996761239'>+919996761239</a>
        </li>
        <li>
          <LocationOnOutlinedIcon />
          <p>Our Address</p>
          <p>Gurgaon, INDIA</p>
        </li>
      </ul>
    </div>
  )
}

export default Contact