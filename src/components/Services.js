import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa6";
import { others } from '../data/other';

const Services = () => {
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
               <Carousel responsive={responsive} autoPlay={true}  swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={5000} transitionDuration={700} className='text-white flex items-center justify-between mt-10 py-5'>
                            {others && others.map((other) => (
                                        <div className='bg-[#202020] lg:p-10 p-6 rounded-2xl lg:mx-3 border-[1px] border-s-[#7B7E86] flex gap-10 transition-all'>      
                                            {other.svg}
                                            <div>
                                              <h2 className='text-[18px] lg:text-[20px] font-bold'>{other.title}</h2>
                                              <p className='py-3 text-[13px]  lg:text-[15px] text-[#c3c3c5]'>{other.desc}</p>
                                              <Link className='text-[13px] lg:text-[15px] flex items-center'>READ MORE <FaArrowRight className='ml-3'/></Link>
                                            </div>
                                        </div>
                            ))}
           </Carousel>
  )
}

export default Services