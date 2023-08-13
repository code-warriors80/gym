import React from 'react';
import Tab from '../components/tab';
import abt1 from '../image/about_1-1-2.png'
import abt2 from '../image/about_1-2-1.png'

const About = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>About</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - About</p>
        </div>
      </section>

      <section className='mt-20'>
            <div className='lg:flex lg:items-center lg:justify-between w-[90%] lg:w-[75%] mx-auto '>
                  <div className='lg:w-[50%] mt-10 lg:mt-0'>
                    <h2 className='lg:text-[45px] text-[30px] font-semibold my-7'>Unlock Your Full Potential, Achieve Your Goals.</h2>
                    <p className=''>Through our personalized approach and expert guidance, we will work together to identify your passions and ambitions. Our team of dedicated professionals is committed to providing you with the tools, resources, and support you need to overcome obstacles and make significant progress.</p>
                    <Tab/>
                  </div>
                  <div className='flex items-center  lg:w-[39%]'>
                    <img src={abt1} alt='' className='lg:w-full w-[100%]'/>
                    <img src={abt2} alt='' className='relative lg:right-40 right-[110px] animate-bounce lg:w-full w-[45%] hidden md:hidden lg:block'/>
                  </div>
            </div>
        </section>

    </div>
  )
}

export default About