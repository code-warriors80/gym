import React from 'react'

const TimeTable = () => {
  return (
               <div className='overflow-scroll table_con'>
               <table className='w-[80%] mx-auto cellpadding="10" mt-10 overflow-scroll'>
                   <thead>
                        <tr className=''>
                                <th scope='col' ></th>
                                <th scope='col' className='border-x-[1px] border-s-line_color py-10 px-10'>SUNDAY</th>
                                <th scope='col' className='border-x-[1px] border-s-line_color px-10'>MONDAY</th>
                                <th scope='col' className='border-x-[1px] border-s-line_color px-10'>TUESDAY</th>
                                <th scope='col' className='border-x-[1px] border-s-line_color px-10'>WEDNESDAY</th>
                                <th scope='col' className='border-x-[1px] border-s-line_color px-10'>THURSDAY</th>
                                <th scope='col' className='border-x-[1px] border-s-line_color px-10'>FRIDAY</th>
                                <th scope='col'>SATURDAY</th>
                        </tr>
                   </thead>

                   <tbody>
                         <tr>
                                                <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color py-16 px-5' id="">06:00 - 07:00</td>
                                                <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center' id=""><strong className='block'>BOXING GYM</strong>Daniel</td>
                                                <td colspan="" rowspan="" className='border-[1px] border-s-line_color' id=""> </td>
                                                <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center' id=""><strong className='block'>BODY BUILD</strong>Daniel</td>
                                                <td colspan="" rowspan="7" className='border-[1px] border-s-line_color border-b-0 text-center' id=""><strong className='block'>REST DAY</strong></td>
                                                <td colspan="" rowspan="" className='border-[1px] border-s-line_color' id=""></td>
                                                <td colspan="" rowspan="2" className='border-[1px] border-s-line_color text-center' id=""><strong className='block'>CARDIO BOX</strong>Daniel	</td>
                                                <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color text-center' id=""><strong className='block'>OPEN GYM</strong>Daniel</td>
                           </tr>
                           <tr>
                                              <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color py-16 px-5'  id=""> 07:00 - 08:00	</td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""></td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center bg-[#1C1C1C] text-white'  id=""><strong className='block'>FITNESS CLASS</strong>Daniel		</td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""></td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""><strong className='block'>BOXING GYM</strong>Daniel</td>
                                              <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color text-center'  id=""></td>
                           </tr>
                           <tr>
                                              <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color py-16 px-5'  id=""> 08:00 - 09:00 </td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""> <strong className='block'>PUMP WORK</strong>Daniel</td>
                                              <td colspan="" rowspan="2" className='border-[1px] border-s-line_color text-center'  id=""></td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""><strong className='block'>BOXING GYM</strong>Daniel</td>
                                              <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""><strong className='block'>OPEN GYM</strong>Daniel </td>
                                              <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color text-center'  id=""><strong className='block'>BOXING GYM</strong>Daniel </td>
                           </tr>
                           <tr>
                                             <td colspan="" rowspan="" className='border-t-[1px] border-s-gray-300 py-16 px-5'  id="">09:00 - 10:00</td>
                                             <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""><strong className='block'>BOXING GYM</strong>Daniel</td>
                                             <td colspan="" rowspan="" className='border-[1px] border-s-line_color text-center'  id=""> </td>
                                             <td colspan="" rowspan=""className='border-[1px] border-s-line_color text-center'  id=""><strong className='block'>FITNESS CLASS</strong>Daniel</td>
                                             <td colspan="" rowspan=""className='border-[1px] border-s-line_color text-center'  id=""> </td>
                                             <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color py-16 px-5'  id=""><strong className='block'>BOXING GYM</strong>Daniel</td>
                               </tr>
                               <tr >
                                             <td colspan="" rowspan="" className='border-t-[1px] border-s-line_color py-16 px-5'  id="">10:00 - 11:00</td>
                                             <td colspan="" rowspan="" className='border-x-[1px] border-s-line_color text-center'  id=""><strong className='block'>BODY BUILD</strong>Daniel</td>
                                             <td colspan="" rowspan="" className='border-x-[1px] border-s-line_color text-center'  id=""><strong className='block'>PUMP WORK</strong>Daniel</td>
                                             <td colspan="" rowspan="" className='border-x-[1px] border-s-line_color text-center'  id=""><strong className='block'>FITNESS CLASS</strong>Daniel</td>
                                             <td colspan="" rowspan="" className='border-x-[1px] border-s-line_color text-center'  id=""><strong className='block'>OPEN GYM</strong>Daniel</td>
                                             <td colspan="" rowspan="" className='border-x-[1px] border-s-line_color text-center'  id=""></td>
                                             <td colspan="" rowspan=""className='border-t-[1px] border-s-line_color py-16 px-5'  id=""><strong className='block'>YOGA CLASS</strong>Daniel </td>
                           </tr>
                   </tbody>
               </table>
           </div>
  )
}

export default TimeTable