import React from 'react'
import testi from "../image/testi_bg12525202.png"

const Gallery = () => {
  return (
    <div className='relative top-16 lg:top-36'>
      <section className='page_header'>
        <div className='w-full py-40 items'>
              <h2 className='text-white text-center text-[40px] font-extrabold'>Gallery</h2>
              <p className='text-center text-white py-5 font-bold'>Fitmas - Gallery</p>
        </div>
      </section>
      <div className=" bg-white">
        <div className="hidden md:inline-flex my-10 md:ml-10 shadow rounded-sm w-full  justify-center">
          <img src={testi} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery