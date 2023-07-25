import { Poppins } from 'next/font/google'
import Image from 'next/image'
import ChefImage from "@/assets/chef.png"
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useRef } from 'react'
import useOnScreen from '@/hooks/useOnScreen'

const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })

export default function Reserve() {

  const [value, onChange] = useState(new Date());
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  return (
    <section className='relative xl:px-[140px] h-fit bg-white md:bg-pattern bg-cover'>
      <div ref={ref} className='relative pb-[60px] lg:pb-0 pt-[60px] md:pt-[120px]  px-3 flex justify-center gap-5'>
        <div className={`hidden  lg:flex justify-center items-end w-1/2 ${isOnScreen ? "animate__animated animate__delay-0.9s animate-cUp" : " "}`}>
          <Image src={ChefImage} alt='chefImage' />
        </div>
        <div ref={ref} className={`w-full flex flex-col items-center justify-center md:justify-normal  lg:w-1/2 px-3 ${isOnScreen ? "animate__animated animate__delay-0.9s lg:animate__delay-1s animate-cUp" : " "}`}>
          <div className='w-full md:px-[42px]'>
            <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border'>
              <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
              </div>
            </div>
            <h2 className={`mt-5 text-[2rem] text-header ${poppins500.className} leading-[1.2]`}>Reserve a table</h2>
            <p className={`mb-5 text-lg ${poppins300.className} text-content leading-[1.7]`}>or Call us at 0344 32423453</p>
          </div>
          <div className={`bg-[#f4f4f4] w-full p-[30px] rounded-[5px]  mt-[60px] ${poppins500.className}`}>
            <h3 className={`mb-5 text-lg font-medium text-header`}><span className='text-[#999999] font-bold'>1/3</span> Please Select a date</h3>
            <div className={`${poppins300.className}`}>
              <Calendar onChange={onChange} value={value} calendarType='gregory' next2Label={null} prev2Label={null} minDetail='month' showNeighboringMonth={false} />
            </div>
            <div className='border-t-2 pt-5 mt-[25px] flex justify-end'>
              <p className='w-fit text-white bg-primary text-sm py-3 px-[30px] rounded-[3px] leading-none cursor-pointer hover:bg-black'>Next</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute h-[3px] left-0 bottom-0 w-full bg-frame-footer bg-repeat-x bg-[length:10px_3px] self-end`}>
      </div>
    </section>
  )
}