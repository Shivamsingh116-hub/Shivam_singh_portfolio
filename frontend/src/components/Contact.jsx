import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Contact = () => {
  return (
    <div className='flex flex-col items-center flex-wrap'>
      <ul className='flex w-4/5 justify-between p-10 flex-wrap' >
        <li className='flex flex-col items-center' >
          <p className='text-4xl rounded-full h-16 w-16 flex items-center justify-center '><EmailOutlinedIcon fontSize='inherit' className='text-white drop-shadow-[0_0_10px_#8A2BE2]' /></p>
          <p className='mt-2 text-s bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent'>Email Address</p>
          <a className='text-purple-400 hover:underline transition-all duration-200 ease-in-out hover:opacity-75 hover:cursor-pointer' href="mailto:shivamsinghk116@gmail.com" >
            shivamsinghk116@gmail.com
          </a>
        </li>
        <li className='flex flex-col items-center' >
          <p className='text-4xl rounded-full h-16 w-16 flex items-center justify-center '><RingVolumeOutlinedIcon fontSize='inherit' className='text-white drop-shadow-[0_0_10px_#8A2BE2]' /></p>
          <p className='text-s bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mt-2'>Phone Number</p>
          <a className='text-purple-400 hover:underline transition-all duration-200 ease-in-out hover:opacity-75 hover:cursor-pointer' href="tel:+919996761239" >
            +91 99967 61239
          </a>
        </li>
        <li className='flex flex-col items-center' >
          <p className='text-4xl rounded-full h-16 w-16 flex items-center justify-center '><LocationOnOutlinedIcon fontSize='inherit' className='text-white drop-shadow-[0_0_10px_#8A2BE2]' /></p>
          <p className='mt-2 text-s bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent' >Our Address</p>
          <p className='text-purple-400 h transition-all duration-200 ease-in-out  ' >Gurgaon, INDIA</p>
        </li>
      </ul>
      <div className='mt-14 w-4/5 flex items-center flex-col'>
        <div>
          <h1 className='text-6xl text-white drop-shadow-[0_0_4px_#8A2BE2]'>Get In Touch</h1>
          <h3 className='text-xl'>📲 I'm Here to Help you!</h3>
          <p className='text-s'>⚡ "Drop us a message! We promise we won’t leave you on ‘Seen’ 👀😂"</p>
        </div>
        <form className='w-full'>
          <div className='flex mt-10 w-full justify-between gap-10 flex-wrap'>
            <div className='flex flex-col flex-1'>
              <label className='flex'>Your Name<p className='text-white drop-shadow-[0_0_10px_#8A2BE2] ms-1'>*</p></label>
              <input type='text' placeholder='Enter name...' className=' w-full h-12 mt-4 p-4 rounded-md border' />
            </div>
            <div className='flex flex-col flex-1'>
              <label className='flex'>Your Email<p className='text-white drop-shadow-[0_0_10px_#8A2BE2] ms-1'>*</p></label>
              <input type='text' placeholder='Enter email...' className='w-full h-12 mt-4 p-4 rounded-md border' />
            </div>
          </div>
          <div className='w-full mt-10'>
            <label className='flex'>Your Message<p className='text-white drop-shadow-[0_0_10px_#8A2BE2] ms-1'>*</p></label>
            <textarea className='w-full h-52 p-4 mt-4 rounded-md border' placeholder='Message'></textarea>
          </div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-purple-600 accent-purple-600 hover:cursor-pointer" />
            <span className="text-white text-s">I agree that my submitted data is being collected and stored.</span>
          </label>
          <button className='border px-7 py-2 mt-4 hover:text-white hover:drop-shadow-[0_0_10px_#8A2BE2] hover:cursor-pointer'>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Contact