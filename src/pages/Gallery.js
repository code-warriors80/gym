import React from 'react'
import trainer1 from '../image/instructors/1-1.jpg'
import trainer2 from '../image/instructors/img-1.jpg'
import trainer3 from '../image/instructors/img-4.jpg'
import trainer4 from '../image/instructors/team-4.jpg'
import trainer5 from '../image/instructors/team2201.jpg'

const Gallery = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>Gallery</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - Gallery</p>
        </div>
      </section>
      <section className='flex mx-auto my-6 py-4 '>
        <img src={trainer5} alt='' className='p-5 w-64 rounded-lg'/>
        <img src={trainer3} alt='' className='p-5  w-64 rounded-lg'/>
        <img src={trainer2} alt='' className='p-5  w-64 rounded-lg'/>
        <img src={trainer1} alt='' className='p-5  w-64 rounded-lg'/>
        <img src={trainer4} alt='' className='p-5  w-64 rounded-lg'/>
      </section>
    </div>
  )
}

export default Gallery