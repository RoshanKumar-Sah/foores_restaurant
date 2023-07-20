
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';
import DailyMenu from '@/components/DailyMenu';
import BgContact from "@/assets/bg_call_section.jpg"
import ContactUs from '@/components/ContactUs';

import PatternImage from "@/assets/pattern_menu.jpg"
import ChefImage from "@/assets/chef.png"
import Calendar from 'react-calendar';


const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [value, onChange] = useState(new Date());
  return (
    <main className='relative'>

      <div className='fixed -z-10'>
        <Image src={BgContact} alt='bgContact' className='w-screen object-cover h-screen' />
      </div>

      <Banner />
      <Tile />
      <AboutUs />
      <DailyMenu />
      <ContactUs />


      <section className='relative h-[735px] md:h-[748px] bg-white '>
        <div className='w-full  absolute hidden md:block '>
          <Image src={PatternImage} alt='patterimage' className='object-cover h-[590px] lg:h-[890px] ' />
        </div>

        <div className='relative pt-[60px] md:pt-[120px] px-3 flex justify-center gap-6'>
          <div className='hidden  lg:flex justify-end w-1/2'>
            <Image src={ChefImage} alt='chefImage' />
          </div>

          <div className='w-full md:w-1/2 px-3'>
            <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border'>
              <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
              </div>
            </div>

<h2 className={`mt-5 text-[2rem] text-header ${poppins500.className} leading-[1.2]`}>Reserve a table</h2>
<p className={`mb-5 text-lg ${poppins300.className} text-content leading-[1.7]`}>or Call us at 0344 32423453</p>

<div>
      <Calendar onChange={onChange} value={value} calendarType='gregory' next2Label={null} prev2Label={null} />
    </div>

          </div>

        </div>

      </section>


    </main>
  )
}
