
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';
import DailyMenu from '@/components/DailyMenu';
import ContactUs from '@/components/ContactUs';
import Reserve from '@/components/Reserve';

import {MdOutlineKeyboardArrowUp} from "react-icons/md"
import * as Scroll from 'react-scroll';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function Home() {
  
// let scroll = Scroll.animateScroll;

// function scrollToTop() {
//   scroll.scrollToTop({smooth:true, duration: 1000, delay:500});
// }
  
  return (
    <main className='bg-contact bg-fixed'>

      

      <Banner />
      <Tile />
      <AboutUs />
      <DailyMenu />
      <ContactUs />
      <Reserve />

{/* <section className='fixed right-4 bottom-4 z-0 cursor-pointer'  onClick={scrollToTop}>
  <div className='bg-black/50 hover:bg-primary rounded-full p-1'>
<MdOutlineKeyboardArrowUp size={36} color='white' />
  </div>
</section> */}


      


    </main>
  )
}
