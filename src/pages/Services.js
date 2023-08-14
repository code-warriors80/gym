import React from 'react'

import { CiDumbbell } from 'react-icons/ci'
import { BiPhoneCall } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa6'

export const HeaderSection = ({ title }) => {
  return (
    <section className='page_header'>
      <div className={`w-full py-40 items bg-slate-500  bg-center bg-no-repeat bg-cover`}>
        <h2 className='text-white text-center text-[40px] font-extrabold'>{title}</h2>
        <p className='text-center text-white py-5 font-bold'>Fitmas - {title}</p>
      </div>
    </section>
  )
}
const servicesArray = [
  {
    logo: <CiDumbbell />,
    title: 'Gym Fitness Class',
    content: 'Our gym is a judgment-free zone, and our members are like family, motivating and inspiring each.',
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
  {
    logo: '',
    title: 'Body Building',
    content: 'Building muscle increases your resting metabolic rate, which can aid in weight management and fat loss.',
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
  {
    logo: '',
    title: 'Power Lifting',
    content: 'Achieving fitness goals and building a well-developed physique can boost self-confidence and body.',
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
  {
    logo: '',
    title: 'Boxing Class',
    content: 'Fitmas has become my second home, a place where I feel inspired and energized every time I step through',
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
  {
    logo: '',
    title: 'Meditation Class',
    content: "This gym has completely transformed the way I approach fitness, and I couldn't be happier with my progress",
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
  {
    logo: '',
    title: 'Yoga Fitness Class',
    content: 'High-intensity workouts that alternate between intense bursts of exercise and short recovery periods...',
    link: 'https://wptf.themepul.co/fitmas/service/best-gym-equipment/'
  },
]
const Services = () => {
  const content = servicesArray.map((i, v) => {
    return (
      <div className=' p-10 flex flex-col gap-y-3 rounded-lg bg-white hover:shadow'>
        <img src={i.logo} alt="image" />
        <h1 className='py-3'>{i.title}</h1>
        <p>{i.content}</p>
        <a href={i.link} className='py-3 flex gap-3 items-center'><span className='bg-gray-300 p-3 rounded-full hover:bg-red-500 hover:text-white'>< FaArrowRight
          className='' /> </span> READ MORE</a>
      </div >
    )
  })
  return (
    <div className='relative top-16 lg:top-36 bg-slate-100'>
      <HeaderSection title={'Services'} />
      <div className='lg:w-[80%] w-[90%] px-3   mx-auto lg:flex flex-col lg:justify-center rounded-xl '>

        <div className=' py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
          {content}
        </div>

      </div>
      <div className={` py-40 flex justify-end bg-center services-section-2`}>
        <div className='w-1/2 items-end'>
          <span className='bg-white text-red-600 p-2 font-semibold my-4 rounded-full'>OUR SERVICES</span>
          <h1 className=' text-[48px] my-4 text-white font-bold'>GET A FREE CONSULTANCY RIGHT NOW HERE!</h1>
          <div className=' flex gap-3'>
            <a href="" className=' p-6 bg-red-600 -skew-x-12 hover:skew-x-12 rounded-lg text-white font-semibold transition hover:bg-white hover:text-black'>View Class Schedule</a>
            <div className='flex items-center gap-3 text-white'>
              <BiPhoneCall className=' text-4xl' />
              <span className='flex flex-col'>
                <span >Need Help?</span>
                <span>(+258) 2569 2582</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services