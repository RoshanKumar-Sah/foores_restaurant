
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';
import DailyMenu from '@/components/DailyMenu';
import ContactUs from '@/components/ContactUs';
import Reserve from '@/components/Reserve';




const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function Home() {

  
  return (
    <main className='bg-contact bg-fixed'>

      

      <Banner />
      <Tile />
      <AboutUs />
      <DailyMenu />
      <ContactUs />
      <Reserve />


<section className='bg-black  h-20'>
  
</section>

      


    </main>
  )
}
