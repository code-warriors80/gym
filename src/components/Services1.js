import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { services } from '../data/services';

const Services1 = () => {
               const responsive = {
                              superLargeDesktop: {
                                // the naming can be any, depends on you.
                                breakpoint: { max: 4000, min: 3000 },
                                items: 5
                              },
                              desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 3
                              },
                              tablet: {
                                breakpoint: { max: 1024, min: 464 },
                                items: 1
                              },
                              mobile: {
                                breakpoint: { max: 464, min: 0 },
                                items: 1
                              }
               };
  return (
               <div className='lg:w-[80%] w-[100%] mx-auto'>
               <Carousel responsive={responsive} autoPlay={true}  swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={5000} transitionDuration={700} className='text-black flex items-center justify-between gap-5 py-10 mt-10'>
                                              {services && services.map((service) => (
                                                                                   <div className='group bg-[#F6F6F7] mx-5 py-10 px-10  rounded-2xl overflow-hidden hover:bg-white hover:shadow transition-all'>
                                                                                                 <div className='bg-white rounded-xl w-max py-5 px-4 group-hover:shadow'>{service.svg}</div>
                                                                                                 <h2 className='lg:text-[22px] text-[19px] font-bold pt-8'>{service.title}</h2>
                                                                                                 <p className='py-5 lg:text-[18px]  text-[#7B7E86]'>{service.desc}</p>
                                                                                                 <Link className='flex items-center gap-4  font-bold uppercase'><div className='text-black bg-white p-5 rounded-full group-hover:bg-link_color group-hover:text-white transition-all'><FaArrowRight /></div> Read More</Link>
                                                                                  </div>
                                            ))}
               </Carousel>
               </div>
  )
}

export default Services1