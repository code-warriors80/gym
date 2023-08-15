import React from 'react'
import { Link } from 'react-router-dom'
import { FaDumbbell, FaPhone, FaArrowRight } from "react-icons/fa6";
import { services } from '../data/services';
import { pricing } from '../data/pricing';

const Services = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>Services</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - Services</p>
        </div>
      </section>

      <section className='my-20'>
        <div className='lg:w-[80%] w-[90%] flex mx-auto flex-wrap gap-10'>
                                            {services && services.map((service) => (
                                                                                    <div className='group bg-[#F6F6F7] lg:w-[30%]  py-10 px-10  rounded-2xl overflow-hidden hover:bg-white hover:shadow transition-all' key={service.id}>
                                                                                                 <div className='bg-white rounded-xl w-max py-5 px-4 group-hover:shadow'>{service.svg}</div>
                                                                                                 <h2 className='lg:text-[22px] text-[19px] font-bold pt-8'>{service.title}</h2>  
                                                                                                 <p className='py-5 lg:text-[18px] text-[#7B7E86]'>{service.desc}</p>
                                                                                                 <Link className='flex items-center gap-4 text-black font-bold uppercase'><div className='text-black bg-white p-5 rounded-full group-hover:bg-link_color group-hover:text-white transition-all'><FaArrowRight /></div> Read More</Link>
                                                                                  </div>
                                            ))}
        </div>
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

        <section className='pb-32 lg:pb-20'>
                <div>
                    <div className='text-center'><span className='text-link_color py-3 px-5 uppercase rounded-full shadow-lg font-semibold text-center mx-auto'>PRICING PLAN</span></div>
                    <h2 className='text-black lg:text-[50px] text-[30px] font-bold mt-5 text-center'>Our Pricing Plan</h2>
                </div>
                <div className='lg:w-[80%] w-[90%] mx-auto lg:flex lg:justify-between gap-7 mt-32'>
                                        {pricing && pricing.map((plans) => (
                                                        <div className='group bg-[#F6F6F7]  p-10 mb-20 lg:mb-0 hover:bg-black hover:text-white transition-all rounded-lg'>
                                                            <div>
                                                                    <div className='bg-link_color w-fit p-7 -skew-x-6 -top-20 relative rounded-lg border-8 border-transparent group-hover:border-white'> {plans.svg}</div>
                                                                    <h2 className='lg:text-[30px] text-[23px] font-extrabold mb-3 packages -mt-8'>{plans.plan}</h2>
                                                                    <h3 className='border-b-2 border-s-line_color pb-5 text-[50px] font-extrabold text-link_color group-hover:text-white'><span className='text-[17px] relative -top-5 mr-2 font-extrabold'>$</span>{plans.price}<span className='text-[17px] font-extrabold'>/{plans.duration}</span></h3>
                                                                    <p className='py-5 lg:text-[18px]'>{plans.desc}</p>
                                                                    <ul className='pb-10 text-gray-500'>
                                                                        {plans.list.map((planitems) => (
                                                                            <li className='flex items-center gap-2 mb-3'><FaDumbbell className='text-link_color'/>{planitems.items}</li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className=''><button className='text-white bg-link_color p-5 font-bold rounded-md -skew-x-6 hover:skew-x-6 hover:bg-white hover:text-black transition-all'>Chose This Plan</button></div>
                                                                </div>
                                                        </div>
                                        ))}
                    </div>

        </section>
    </div>
  )
}

export default Services