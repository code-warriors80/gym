import React from 'react'
import cont from '../image/contact1-1.png'
import { FaEnvelope, FaUser } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      
      <section className='page_header'>
            <div className='w-full py-40 items'>
                  <h2 className='text-white text-center text-[40px] font-extrabold'>Contact</h2>
                  <p className='text-center text-white py-5 font-bold'>Fitmas - Contact</p>
            </div>
      </section>

      <div className='py-20 '>
          <div className='w-[80%] lg:flex lg:items-center mx-auto lg:justify-center gap-10'>
                              <div className='lg:w-[30%] py-10 lg:py-20 border-[1px] border-gray-100 rounded-2xl flex items-center justify-center gap-10'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none"><path d="M18.9062 23C18.9062 21.4062 17.5 20 15.9062 20H12.9062C9.53125 20 6.90625 22.7188 6.90625 26V32C6.90625 35.2812 9.625 38 12.9062 38H15.9062C17.5938 38 18.9062 36.6875 18.9062 35V23ZM15.9062 35H12.9062C11.2188 35 9.90625 33.6875 9.90625 32V26C9.90625 24.4062 11.2188 23 12.9062 23H15.9062V35ZM36.9062 38C40.1875 38 42.9062 35.2812 42.9062 32V26C42.9062 22.7188 40.1875 20.0938 36.9062 20.0938H34C32.3125 20.0938 31 21.5 31 23.0938V35.0938C31 36.7812 32.3125 38.0938 34 38.0938H36.9062V38ZM33.9062 23H36.8125C38.4062 23 39.8125 24.4062 39.8125 26V32C39.8125 33.6875 38.4062 35 36.8125 35H33.8125L33.9062 23ZM27.25 2.1875C12.8125 0.78125 1.375 12.3125 1 26.0938L0.90625 27.5C0.90625 28.3438 1.65625 29 2.5 29C3.25 29 3.90625 28.3438 4 27.5938V26C4.28125 14.0938 14.3125 3.96875 26.875 5.09375C37.8438 6.125 46 15.6875 46 26.6562V42.5C46 44.9375 43.9375 47 41.5 47H33.625C34.0938 45.9688 34.0938 44.75 33.4375 43.5312C32.5938 41.9375 30.8125 41 29.0312 41H23.5938C21.4375 41 19.4688 42.5 19 44.6562C18.5312 47.5625 20.6875 50 23.4062 50H41.3125C45.4375 50 48.8125 46.7188 48.8125 42.5938V26.6562C49 14.1875 39.625 3.3125 27.25 2.1875ZM29.4062 47H23.4062C22.5625 47 21.9062 46.3438 21.9062 45.5C21.9062 44.75 22.5625 44 23.4062 44H29.4062C30.1562 44 30.9062 44.75 30.9062 45.5C30.9062 46.3438 30.25 47 29.4062 47Z" fill="#DF0A0A"></path></svg>
                                          <div>
                                                <h6 className='text-link_color font-bold text-[14px]'>CALL US 24/7</h6>
                                                <h2 className='text-[20px] font-semibold'>+584 (25) 21453.</h2>
                                          </div>
                              </div>

                              <div className='lg:w-[30%] py-10 lg:py-20 border-[1px] border-gray-100 rounded-2xl flex items-center justify-center gap-10 my-5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M46.5 18C45.6562 18 45 18.75 45 19.5V43.5C45 44.3438 44.25 45 43.5 45H4.5C3.65625 45 3 44.3438 3 43.5V19.5C3 18.75 2.25 18 1.5 18C0.65625 18 0 18.75 0 19.5V43.5C0 46.0312 1.96875 48 4.5 48H43.5C45.9375 48 48 46.0312 48 43.5938V19.5C48 18.75 47.25 18 46.5 18ZM6 25.9688C6.09375 26.0625 6.09375 26.1562 6.09375 26.25C6.1875 26.3438 6.1875 26.3438 6.28125 26.4375C6.375 26.5312 6.375 26.625 6.46875 26.7188C6.5625 26.7188 6.5625 26.7188 6.5625 26.7188L19.0312 35.9062C20.4375 36.9375 22.125 37.5 24 37.5C25.7812 37.5 27.4688 36.9375 28.875 35.8125L41.3438 26.625C41.3438 26.625 41.3438 26.625 41.4375 26.625C41.5312 26.5312 41.5312 26.4375 41.625 26.3438C41.7188 26.25 41.7188 26.25 41.8125 26.1562C41.8125 26.0625 41.8125 25.9688 41.9062 25.875C41.9062 25.7812 41.9062 25.6875 41.9062 25.5938C41.9062 25.5938 42 25.5938 42 25.5V4.5C42 2.0625 39.9375 0 37.5 0H10.5C7.96875 0 6 2.0625 6 4.5V25.5C6 25.5938 6 25.5938 6 25.6875C6 25.7812 6 25.875 6 25.9688ZM9 4.5C9 3.75 9.65625 3 10.5 3H37.5C38.25 3 39 3.75 39 4.5V24.75L27.0938 33.4688C25.2188 34.875 22.6875 34.875 20.8125 33.4688L9 24.75V4.5ZM33 22.5C33 21.6562 32.25 21 31.5 21H16.5C15.6562 21 15 21.6562 15 22.5C15 23.25 15.6562 23.9062 16.5 23.9062H31.5C32.25 24 33 23.3438 33 22.5ZM16.5 15H31.5C32.25 15 33 14.25 33 13.5C33 12.75 32.25 12.0938 31.5 12.0938H16.5C15.6562 12.0938 15 12.8438 15 13.5C15 14.3438 15.6562 15 16.5 15Z" fill="#DF0A0A"></path></svg>
                                                <div>
                                                      <h6 className='text-link_color font-bold text-[14px]'>MAKE A QUOTE</h6>
                                                      <h2 className='text-[20px] font-semibold'>info@gymfit.com</h2>
                                                </div>
                              </div>

                              <div className='lg:w-[30%] py-10 lg:py-20 border-[1px] border-gray-100 rounded-2xl flex items-center justify-center gap-10'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="49" viewBox="0 0 54 49" fill="none"><path d="M24.75 10.5C24.75 9.28125 25.6875 8.25 27 8.25C28.2188 8.25 29.25 9.28125 29.25 10.5C29.25 11.8125 28.2188 12.75 27 12.75C25.6875 12.75 24.75 11.8125 24.75 10.5ZM25.5938 29.25C22.5938 25.5 15.75 16.4062 15.75 11.25C15.75 5.0625 20.7188 0 27 0C33.1875 0 38.25 5.0625 38.25 11.25C38.25 16.4062 31.3125 25.5 28.3125 29.25C27.6562 30.1875 26.25 30.1875 25.5938 29.25ZM34.3125 14.5312C34.9688 13.0312 35.25 12 35.25 11.25C35.25 6.75 31.5 3 27 3C22.4062 3 18.75 6.75 18.75 11.25C18.75 12 18.9375 13.0312 19.5938 14.5312C20.1562 16.0312 21.0938 17.625 22.0312 19.2188C23.625 21.8438 25.5 24.375 27 26.25C28.4062 24.375 30.2812 21.8438 31.875 19.2188C32.8125 17.625 33.75 16.0312 34.3125 14.5312ZM37.9688 20.9062C37.9688 21 37.875 21 37.7812 21C38.5312 19.6875 39.2812 18.2812 39.8438 16.9688L50.9062 12.5625C52.3125 12 54 13.0312 54 14.625V40.0312C54 40.9688 53.4375 41.8125 52.5 42.0938L37.9688 47.9062C37.6875 48.0938 37.4062 48.0938 37.0312 48L16.5 42.0938L3 47.5312C1.59375 48.0938 0 47.0625 0 45.4688V20.0625C0 19.125 0.46875 18.2812 1.40625 18L12.9375 13.3125C13.125 14.3438 13.4062 15.2812 13.7812 16.2188L3 20.5312V44.3438L15 39.5625V28.5C15 27.75 15.6562 27 16.5 27C17.25 27 18 27.75 18 28.5V39.375L36 44.5312V28.5C36 27.75 36.6562 27 37.5 27C38.25 27 39 27.75 39 28.5V44.3438L51 39.5625V15.75L37.9688 20.9062Z" fill="#DF0A0A"></path></svg>
                                          <div>
                                                <h6 className='text-link_color font-bold text-[14px]'>SERVICE STATION</h6>
                                                <h2 className='text-[20px] font-semibold'>25 Hilton Street</h2>
                                          </div>
                              </div>

          </div>

          <section className='py-20 px-5'>
                        <div className='lg:w-[80%] mx-auto lg:flex bg-[#F6F6F7] rounded-2xl overflow-hidden'>
                                    <img src={cont} alt=''/>
                                    <div className='lg:px-16 px-5 py-20 w-full'>
                                                <div>
                                                      <span className='bg-white text-link_color py-3 px-5 uppercase rounded-full shadow-lg font-semibold mx-auto'>CONTACT US</span>
                                                      <h2 className='text-black lg:text-[50px] text-[30px] font-bold mt-5'>Send Us Message</h2>
                                                </div>

                                                <form className=' w-full'>
                                                      <div className='lg:flex gap-10 pt-10'>
                                                            <div className='flex items-center justify-between w-full bg-white p-5 rounded-md mb-5 lg:mb-0'>
                                                                  <input className='w-full outline-none' placeholder='Your Name'/>
                                                                  <FaUser className='text-gray-500'/>
                                                            </div>
                                                            
                                                            <div className='flex items-center justify-between w-full bg-white p-5 rounded-md'>
                                                                        <input className='w-full outline-none' placeholder='Email Address'/>
                                                                        <FaEnvelope className='text-gray-500'/>
                                                            </div>
                                                      </div>

                                                      <div className='w-full bg-white my-6 rounded-md'>
                                                                  <select className='flex items-center justify-between w-full bg-white text-gray-400 lg:p-5 px-3 py-5 outline-none rounded-md'>
                                                                        <option className='text-gray-400'>Body Building</option>
                                                                        <option>Power Lifting</option>
                                                                        <option>Meditation Class</option>
                                                                        <option>Boxing Class</option>
                                                                  </select>
                                                      </div>

                                                      <div className='w-full outline-1 rounded-md'>
                                                            <textarea className='w-full h-52 resize-none outline-none p-5 rounded-md' placeholder='Type Your Message'></textarea>
                                                      </div>

                                                      <button className='px-16  py-5 bg-link_color text-white mt-3 font-semibold rounded-md hover:bg-black transition-all'>Send A Message</button>
                                                </form>
                                    </div>

                        </div>
          </section>
      </div>
    </div>
  )
}

export default Contact