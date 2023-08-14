import React from 'react'
import { Link } from 'react-router-dom'
import Tab from '../components/tab'
import abt1 from '../image/about_1-1-2.png'
import abt2 from '../image/about_1-2-1.png'
import {  FaPhone } from "react-icons/fa6";
import Services1 from '../components/Services1'
import Trainers from '../components/Trainers'

const About = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>About</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - About</p>
        </div>
      </section>

      <section className='lg:py-20 py-10'>
            <div className='lg:flex lg:items-center lg:justify-between gap-10 w-[90%] lg:w-[75%] mx-auto '>

                  <div className='lg:w-[50%] mb-10 lg:mb-0'>
                    <span className='text-link_color py-3 px-5 uppercase rounded-full shadow-lg font-semibold'>More About Us</span>
                    <h2 className='lg:text-[45px] text-[30px] font-semibold my-7'>Unlock Your Full Potential, Achieve Your Goals.</h2>
                    <p className='lg:text-[18px]'>Welcome to GymFit. your ultimate destination for achieving your fitness goals. We understand the importance of leading a healthy lifestyle and provide a top-notch fitness facility to support you in your fitness journey..</p>
                    <Tab/>
                    <div className='lg:flex lg:items-center  gap-20'>
                        <Link className='text-white bg-link_color p-5 font-bold rounded-md -skew-x-6 hover:skew-x-6 hover:bg-black transition-all'>View Class Schedule</Link>
                        <div className='flex items-center mt-12 lg:mt-0 gap-5'>
                            <div className='border-s-[1px] border-line_color border-x-[1px] border-y text-link_color p-6 rounded-full'><FaPhone /></div>
                            <div className=''>
                              <p className='font-semibold mb-2'>Need Help?</p>
                              <h4 className='font-bold text-xl'>(+258) 2569 2582</h4>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className='flex items-center  lg:w-[39%]'>
                      <img src={abt1} alt='' className='lg:w-full w-[100%]'/>
                      <img src={abt2} alt='' className='relative lg:right-40 right-[110px] animate-bounce lg:w-full w-[45%] hidden md:hidden lg:block'/>
                  </div>
            </div>
        </section>

        <section className='pb-10 pt-10'>
            <div>
                <div className='text-center'><span className='text-link_color py-3 px-5 uppercase rounded-full shadow-lg font-semibold text-center mx-auto'>OUR SERVICES</span></div>
                <h2 className='text-black lg:text-[50px] text-[30px] font-bold mt-5 text-center'>Service We Provide</h2>
            </div>

            <Services1 />
        </section>

        <section className='abt-rand mb-16'>
            <div className=' py-20 lg:py-32 bg-cover1 px-10 lg:px-0 flex justify-center lg:justify-end'>

                   <div className='lg:w-[40%] lg:mr-40 mr-0'>
                                  <span className='text-link_color bg-white py-3 px-5 uppercase rounded-full shadow-lg font-semibold mx-auto'>OUR SERVICES</span>
                                  <h2 className='text-white lg:text-[50px] text-[30px] font-bold my-10 '>GET A FREE CONSULTANCY RIGHT NOW HERE!</h2>


                                  <div className='lg:flex lg:items-center  gap-20'>
                                            <Link className='text-white bg-link_color p-5 font-bold rounded-md -skew-x-6 hover:skew-x-6 hover:bg-white hover:text-black transition-all'>View Class Schedule</Link>
                                            <div className='flex items-center mt-12 lg:mt-0 gap-5'>
                                                <div className='border-s-[1px] border-line_color border-x-[1px] border-y text-white p-6 rounded-full'><FaPhone /></div>
                                                <div className=''>
                                                  <p className='font-semibold mb-2 text-white'>Need Help?</p>
                                                  <h4 className='font-bold text-xl text-white'>(+258) 2569 2582</h4>
                                                </div>
                                            </div>
                              </div>
                    </div>
            </div>
        </section>

        <section className='pb-10'>
            <div>
                <div className='text-center'><span className='text-link_color py-3 px-5 uppercase rounded-full shadow-lg font-semibold text-center mx-auto'>OUR TRAINER</span></div>
                <h2 className='text-black lg:text-[50px] text-[30px] font-bold mt-5 text-center'>Meet Our Amazing Team</h2>
            </div>
            <Trainers />
        </section>
    </div>
  )
}

export default About