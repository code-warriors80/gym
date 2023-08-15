import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { instructors } from '../data/instructors';

const Trainers = () => {
               const responsive = {
                              superLargeDesktop: {
                                // the naming can be any, depends on you.
                                breakpoint: { max: 4000, min: 3000 },
                                items: 5
                              },
                              desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 4
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
                <Carousel responsive={responsive} autoPlay={true}  swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={5000} transitionDuration={700} className='text-black flex items-center justify-between py-10 mt-10'>
                            {instructors && instructors.map((trainer) => (
                                                    <div className='group bg-[#F6F6F7] mx-5 text-center pb-5  rounded-2xl overflow-hidden hover:bg-white hover:shadow transition-all'>
                                                                  <div className='rounded-2xl overflow-hidden p-5'><img src={trainer.img} alt='' className=' rounded-2xl'/></div>
                                                                  <h3 className='text-[20px] font-extrabold py-3'>{trainer.name}</h3>
                                                                  <p className='text-[14px]'>{trainer.positon}</p>

                                                                  <div className='items-center justify-center py-3 gap-5 hidden group-hover:flex mt-2'>
                                                                                {trainer.social.map((soc) => (
                                                                                    <Link className='bg-[#F6F6F7] p-4 rounded-xl hover:bg-link_color hover:text-white'>{soc.link}</Link>
                                                                                ))}
                                                                  </div>
                                                  </div>
                            ))}
                </Carousel>
    </div>
  )
}

export default Trainers