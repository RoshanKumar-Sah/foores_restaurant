
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';

const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })

export default function Home() {


  return (
    <main>

      <Banner />
      <Tile />
      <AboutUs />

      <section className='bg-[#F4F4F4]'>
        <div className='mx-[140px] py-[120px] px-3'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border flex justify-center'>
              <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
              </div>
            </div>
            <h2 className={`mt-5`}>Our Daily Menu</h2>
          </div>
        </div>
      </section>


    </main>
  )
}
