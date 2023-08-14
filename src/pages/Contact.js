import React from 'react'
import { HeaderSection } from './Services'
import img from '../image/instructors/img-1.jpg'
import { FaEnvelope, FaHeadset, FaIdBadge, fagmail } from 'react-icons/fa6'
import { BsEnvelope, BsFileEarmarkPerson, BsFilePerson, BsMailbox, BsPersonBadge } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { BsFillMapFill } from 'react-icons/bs'
import { BiBadge, BiEnvelope, BiMailSend } from 'react-icons/bi'
const contact = [
  {
    icon: <FaHeadset />,
    title: 'CALL US 24/7',
    content: '+584 (25) 21453.'
  },
  {
    icon: <HiMail />,
    title: 'MAKE A QUOTE',
    content: 'info@gymfit.com'
  },
  {
    icon: <BsFillMapFill />,
    title: 'SERVICE STATION',
    content: '25 Hilton Street'
  },
]
const Contact = () => {
  const content = contact.map((i, v) => {
    return (
      <div className='p-10 border-[1px] border-gray-200  rounded-lg flex gap-4 items-center'>
        <span className='text-[40px] text-red-600'>{i.icon}</span>
        <span className='flex flex-col justify-start items-start'>
          <span className='text-red-600 font-semibold'>{i.title}</span>
          <span className='font-bold text-xl'>{i.content}</span>
        </span>
      </div>
    )
  })

  const inputdiv = ' px-6 bg-white flex gap-x-2 border-[1px] hover:border-red-600 items-center rounded-lg '
  const inputStyle = 'border-none w-full outline-none py-3 transition-all bg-white  ease-in '
  return (
    <div className='relative top-16 lg:top-36'>
      <HeaderSection title={'Contact'} />
      <div className=' pt-[120px]'>
        <div className='max-w-6xl mx-auto flex flex-wrap items-center justify-center'>
          {content}
        </div>
      </div>
      <div className=" py-[120px]">
        <div className="max-w-6xl bg-slate-950 mx-auto  flex flex-col lg:flex-row overflow-hidden rounded-tl-2xl">
          {/* Image Section */}
          <div className="w-full lg:w-[30%]  bg-red-600">
            <img src={img} alt="Contact" className="w-full h-full object-cover" />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[70%] bg-gray-100 p-8">
            <h2 className="font-semibold mb-4 bg-white text-red-600 rounded-full px-4 py-2 inline-block">Contact Us</h2>
            <h1 className="text-5xl text-gray-800  font-semibold mb-4">Send Us Message</h1>
            <div className="grid grid-cols-1  mt-6 gap-4 md:grid-cols-2">
              <div className={`${inputdiv}`}>
                <input type="text" id="fullname" className={inputStyle} placeholder='Your Name' />
                <BsPersonBadge />
              </div>
              <div className={`${inputdiv} text-xl`}>
                <input type="email" id="email" className={inputStyle} placeholder='Email Address' />
                <BiEnvelope />
              </div>
            </div>
            <div className={`${inputdiv} mt-4`}>
              <select name="" id="" className={`${inputStyle} w-full`}>
                <option value="">Body Builder</option>
                <option value="">Power Lifting</option>
                <option value="">Meditation Class</option>
                <option value="">Boxing Class</option>
              </select>
            </div>
            <div className={`${inputdiv} mt-4`}>
              <textarea id="content" className="border-0 outline-none  p-2 w-full h-32 resize-none" placeholder='Type Your Message'></textarea>
            </div>
            <button className="bg-red-600 text-white mt-4 py-3 px-4 rounded-md hover:bg-black font-semibold">Send A Message</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact