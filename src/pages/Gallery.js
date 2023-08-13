import React from 'react';
import g1 from '../image/gallery/portfolio1_3.png'
import g2 from '../image/gallery/portfolio1_4.png'
import g3 from '../image/gallery/portfolio1_5.png'
import g4 from '../image/gallery/portfolio1_6.png'
import g5 from '../image/gallery/portfolio1_7.png'
import g6 from '../image/gallery/portfolio1_8.png'

const Gallery = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>Gallery</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - Gallery</p>
        </div>
      </section>
      
        <section className=' py-10 lg:py-20 mb-10'>
            <div className='  lg:w-[80%]  lg:flex  lg:flex-wrap mx-auto gap-10' >
              <img src={g1} alt='' className='rounded-xl lg:w-[30%]'/>
              <img src={g2} alt='' className='rounded-xl lg:w-[30%] '/>
              <img src={g3} alt='' className=' rounded-xl  lg:w-[30%]'/>
              <img src={g4} alt='' className='rounded-xl  lg:w-[30%]'/>
              <img src={g5} alt='' className='rounded-xl  lg:w-[30%]'/>
              <img src={g6} alt='' className='rounded-xl  lg:w-[30%]'/>
            </div>
        </section>
    </div>
  )
}

export default Gallery