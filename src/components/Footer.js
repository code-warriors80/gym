import React from 'react'
import { Link } from 'react-router-dom';


// ICONS
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn,  FaPhone, FaDumbbell, FaGithub, FaLocationDot } from "react-icons/fa6";

// IMAGES
import logo from '../image/fitmas-logo-white.svg'


const Footer = () => {
  return (
    <footer className='lg:mt-32'>
          <div className='py-20 footer'>
                <div className='lg:w-[75%] w-[90%] mx-auto text-white'>
                      <div className='lg:flex lg:items-center lg:justify-center lg:border-b lg:border-s-[1px] lg:border-l-transparent lg:border-gray-800'>

                              <div className='lg:py-12 py-5 flex items-center gap-10 lg:pr-28'>
                                  <div className='bg-gray-900 p-7 rounded-full'><FaLocationDot className='text-[30px]'/></div>
                                  <div>
                                      <h3 className='text-sm font-semibold mb-3'>GYM LOCATION</h3>
                                      <h4 className='text-[20px] font-bold'>Marina Lane Berlin</h4>
                                  </div>
                              </div>

                            <div className='lg:py-12 py-5 flex items-center gap-10 lg:border-s-[1px] lg:border-x lg:border-gray-800  lg:px-16'>
                                 <div className='bg-gray-900 p-7 rounded-full'><FaEnvelope className='text-[30px]'/></div>
                                <div>
                                    <h3 className='text-sm font-semibold mb-3'>EMAIL ADDRESS</h3>
                                    <h4 className='text-[20px] font-bold'>health@gymfit.com</h4>
                                </div>
                            </div>

                            <div className='lg:py- py-5 flex items-center gap-10 lg:pl-28'>
                                <div className='bg-gray-900 p-7 rounded-full'><FaPhone className='text-[30px]'/></div>
                                <div>
                                    <h3 className='text-sm font-semibold mb-3'>PHONE NUMBER</h3>
                                    <h4 className='text-[20px] font-bold'>(+189) 2538-2145</h4>
                                </div>
                            </div>
                      </div>
                </div>

                <div className='text-white lg:w-[75%] w-[90%] mx-auto lg:flex lg:items-start lg:justify-between py-5 mt-20'>
                      <div className='lg:w-[25%] mb-5'>
                              <img src={logo} alt='' className='mb-8'/>
                              <p className='text-new_color'>A gym, also known as a fitness center or health club, is a facility dedicated to physical fitness and exercise gyms and typically offer a range</p>
                              <div className='text-white flex items-center gap-6 mt-10'>
                                <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaFacebook /></Link></div>
                                <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaInstagram /></Link></div>
                                <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaLinkedinIn /></Link></div>
                              </div>
                      </div>

                      <div>
                          <h3 className='text-[20px] font-extrabold mb-7'>Quick Links</h3>
                          <ul>
                                <li className='mb-3 font-light text-new_color flex items-center gap-3 hover:text-link_color'><FaDumbbell /> About Us</li>
                                <li className='mb-3 font-light text-new_color flex items-center gap-3 hover:text-link_color'><FaDumbbell />Our Mission</li>
                                <li className='mb-3 font-light text-new_color flex items-center gap-3 hover:text-link_color'><FaDumbbell />Meet The Team</li>
                                <li className='mb-3 font-light text-new_color flex items-center gap-3 hover:text-link_color'><FaDumbbell />Our Projects</li>
                                <li className='mb-3 font-light text-new_color flex items-center gap-3 hover:text-link_color'><FaDumbbell />Contact Us</li>
                          </ul>
                      </div>

                      <div>
                            <h3 className='text-[20px] font-extrabold mb-7'>Gallery</h3>
                      </div>

                        <div className='lg:w-[25%]'>
                                  <h3 className='text-[20px] font-extrabold mb-7'>Newsletter</h3>
                                  <p className='text-new_color'>Get 10% off your first order! Hurry up</p>
                                  <input type='text' placeholder='Your Email Address' className='w-full py-5 px-3 my-4 rounded-lg text-black outline-none'/>
                                  <button className=' -skew-x-6 py-5 px-10  font-bold bg-link_color hover:text-black hover:bg-white hover:skew-x-6 rounded-lg transition-all'>SUBSCRIBE</button>
                        </div>
                </div>
          </div>

          <div className=' bg-gray-800'>
                <div className='lg:flex lg:items-center lg:justify-between  lg:w-[75%] w-[90%] mx-auto py-10'>
                        <p className='text-center  text-white font-bold'>Copyright © 2023. Developed By Code_Warriors</p>
                        <div className='text-white flex items-center justify-center mt-5 lg:mt-0 gap-6'>
                                        <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaFacebook /></Link></div>
                                        <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaInstagram /></Link></div>
                                        <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaLinkedinIn /></Link></div>
                                        <div className='bg-white text-black p-3 rounded-lg hover:bg-link_color hover:text-white transition'><Link><FaGithub /></Link></div>
                          </div>
                </div>
          </div>
    </footer>

  )
}

export default Footer