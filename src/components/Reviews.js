import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// ICONS
import { FaStar } from 'react-icons/fa6';

// IMAGES
import testi1 from '../image/testi/testi_1_2.png'
import testi2 from '../image/testi/testi_1_3.png'

const Reviews = () => {

  return (
               <div className=''>
                          <Carousel showArrows={false}>
                                    <div className='text-gray-400 lg:px-20 lg:w-[80%] mx-auto'>
                                                  <div className='flex items-center justify-center lg:my-12 my-5 w-32 mx-auto'><img src={testi1} alt='' /></div>
                                                  <p className='text-center lg:text-[18px] lg:font-bold lg:px-16 px-5'>I have been a member of fitmas for over a year now, and it has been a game-changer for my fitness journey. The gym has fantastic range of equipmwnt that caters to all my workout needs</p>
                                                  <div className='flex items-center justify-center gap-3 text-link_color mt-5'>
                                                                  <FaStar className='text-[20px]'/>
                                                                  <FaStar className='text-[20px]'/>
                                                                  <FaStar className='text-[20px]'/>
                                                  </div>
                                    </div>
                                    <div className='text-gray-400 lg:px-20 lg:w-[80%] mx-auto'>
                                                  <div className='flex items-center justify-center lg:my-12 my-5 w-32 mx-auto'><img src={testi2} alt='' /></div>
                                                  <p className='text-center lg:text-[18px] lg:font-bold lg:px-16 px-5'>I have been a member of fitmas for over a year now, and it has been a game-changer for my fitness journey. The gym has fantastic range of equipmwnt that caters to all my workout needs</p>
                                                  <div className='flex items-center justify-center gap-3 text-link_color mt-5'>
                                                                  <FaStar className='text-[20px]'/>
                                                                  <FaStar className='text-[20px]'/>
                                                                  <FaStar className='text-[20px]'/>
                                                  </div>
                                    </div>
                          </Carousel>
               </div>
  )
}

export default Reviews