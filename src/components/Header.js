import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/fitmas-logo-black.svg'
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaBars, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='fixed w-full z-10 bg-white shadow-lg'>
      <nav className='hidden lg:flex lg:justify-between py-3 px-5 lg:p-0'>
          <div className='lg:w-[20%] lg:flex lg:items-center lg:justify-center lg:border-r-[1px] lg:border-s-line_color skew-x-12'>
            <img src={logo} alt='' className='w-[70%] lg:w-[60%]'/>
          </div>

          <div className='w-[60%]  hidden lg:block'>
                <div className='flex justify-between py-4 px-7 border-b-[1px] border-s-line_color'>
                    <div className='flex items-center gap-10'>
                      <p className='text-[14px] font-semibold flex items-center'><FaEnvelope className='mr-3'/> support@gmail.com</p>
                      <p className='text-[14px] font-semibold flex items-center'><FaClock className='mr-3'/> Mon - Sat: 8.00 am-7.00 pm</p>
                    </div>
                    <div className='flex items-center gap-10'>
                        <p className='text-[14px] font-semibold'>Visit our social pages</p>
                        <Link><FaFacebook /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FaLinkedinIn /></Link>
                    </div>
                </div>

                <div className='flex items-center justify-between px-20'>
                      <ul className='flex justify-center py-8 gap-12'>
                        <li className='font-extrabold'><Link to='/'>Home</Link></li>
                        <li className='font-extrabold'><Link to='/about'>About</Link></li>
                        <li className='font-extrabold'><Link to='/services'>Services</Link></li>
                        <li className='font-extrabold'><Link to='/gallery'>Gallery</Link></li>
                        <li className='font-extrabold'><Link to='/contact'>Contact</Link></li>
                      </ul>
                      <div className='flex items-center'><FaPhone className='mr-3' /> (904) 12-366-25</div>
                </div>
          </div>

          <div className='lg:w-[20%] lg:flex lg:items-center lg:justify-center gap-10  lg:border-l-[1px] lg:border-s-line_color lg:-skew-x-12'>
            <Link className='text-white bg-link_color p-5 rounded-md font-bold hidden lg:block lg:-skew-x-6'>Get Quotes</Link>
          </div>
      </nav>

      <nav className='lg:hidden flex items-center justify-between p-3'>
              <img src={logo} alt='' className='w-[40%]'/>
              <button className='lg:border-s lg:border-[1px] text-white bg-link_color lg:bg-transparent p-4 font-bold rounded-md'><FaBars /></button>
      </nav>
    </div>
  )
}

export default Header