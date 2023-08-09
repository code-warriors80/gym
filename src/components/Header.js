import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/fitmas-logo-black.svg'
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaBars,  FaDumbbell,  FaDeleteLeft, FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const [model, setModel] = useState(false);
  return (
    <div className='fixed w-full z-10 bg-white shadow-lg'>
      <nav className='hidden lg:flex lg:justify-between py-3 px-5 lg:p-0'>
          <div className='lg:w-[20%] lg:flex lg:items-center lg:justify-center lg:border-r-[1px] lg:border-s-line_color skew-x-12'>
            <img src={logo} alt='' className='w-[70%] lg:w-[60%]'/>
          </div>

          <div className='w-[60%]  hidden lg:block'>
                <div className='flex justify-between py-4 px-7 border-b-[1px] border-s-line_color text-gray-600'>
                    <div className='flex items-center gap-10'>
                      <p className='text-[14px] font-semibold flex items-center'><FaEnvelope className='mr-3'/> support@gmail.com</p>
                      <p className='text-[14px] font-semibold flex items-center'><FaClock className='mr-3'/> Mon - Sat: 8.00 am-7.00 pm</p>
                    </div>
                    <div className='flex items-center gap-10'>
                        <p className='text-[14px] font-semibold'>Visit our social pages</p>
                        <Link className='hover:text-link_color'><FaFacebook /></Link>
                        <Link className='hover:text-link_color'><FaInstagram /></Link>
                        <Link className='hover:text-link_color'><FaTwitter /></Link>
                        <Link className='hover:text-link_color'><FaLinkedinIn /></Link>
                    </div>
                </div>

                <div className='flex items-center justify-between px-20'>
                      <ul className='flex justify-center py-8 gap-12'>
                        <li className='font-extrabold hover:text-link_color'><Link to='/'>Home</Link></li>
                        <li className='font-extrabold hover:text-link_color'><Link to='/about'>About</Link></li>
                        <li className='font-extrabold hover:text-link_color'><Link to='/services'>Services</Link></li>
                        <li className='font-extrabold hover:text-link_color'><Link to='/gallery'>Gallery</Link></li>
                        <li className='font-extrabold hover:text-link_color'><Link to='/contact'>Contact</Link></li>
                      </ul>
                      <div className='flex items-center hover:text-link_color'><FaPhoneVolume className='mr-5 text-link_color' /> (904) 12-366-25</div>
                </div>
          </div>

          <div className='lg:w-[20%] lg:flex lg:items-center lg:justify-center gap-10  lg:border-l-[1px] lg:border-s-line_color lg:-skew-x-12'>
            <Link className='text-white bg-link_color p-5 rounded-md font-bold hidden lg:block lg:-skew-x-6'>Get Quotes</Link>
          </div>
      </nav>

      <nav className='lg:hidden flex items-center justify-between p-3'>
              <img src={logo} alt='' className='w-[40%]'/>
              {model === true && (
                        <ul className='absolute bg-white left-0 top-[71px] h-[90vh] w-[50%] py-10'>
                        <li className='font-extrabold pb-10 px-5'><Link to='/' className='flex items-center gap-5' onClick={() => setModel(false)}><FaDumbbell />Home</Link></li>
                        <li className='font-extrabold pb-10 px-5'><Link to='/about' className='flex items-center gap-5' onClick={() => setModel(false)}><FaDumbbell />About</Link></li>
                        <li className='font-extrabold pb-10 px-5'><Link to='/services' className='flex items-center gap-5' onClick={() => setModel(false)}><FaDumbbell />Services</Link></li>
                        <li className='font-extrabold pb-10 px-5'><Link to='/gallery' className='flex items-center gap-5' onClick={() => setModel(false)}><FaDumbbell /> Gallery</Link></li>
                        <li className='font-extrabold pb-10 px-5'><Link to='/contact' className='flex items-center gap-5' onClick={() => setModel(false)}> <FaDumbbell />Contact</Link></li>
              </ul>
              )}
              {model === false ?(<button className='lg:border-s lg:border-[1px] text-white bg-link_color lg:bg-transparent p-4 font-bold rounded-md' onClick={() => setModel(true)}><FaBars /></button>) : (<button className='lg:border-s lg:border-[1px] text-white bg-link_color lg:bg-transparent p-4 font-bold rounded-md' onClick={() => setModel(false)}><FaDeleteLeft /></button>)}
      </nav>
    </div>
  )
}

export default Header