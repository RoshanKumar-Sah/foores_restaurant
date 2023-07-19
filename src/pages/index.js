
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';
import MenuBg from "@/assets/banner_bg.jpg";
import OfferDetails from "@/assets/banner.svg"

const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })
const lora = Lora({ subsets: ['latin'], weight:'400' })

export default function Home() {


  return (
    <main>

      <Banner />
      <Tile />
      <AboutUs />

      <section className='bg-[#F4F4F4]'>
        <div className=' xl:mx-[140px] py-[120px] px-3'>
          <div className='mb-12 flex flex-col justify-center items-center'>
            <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border flex justify-center'>
              <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
              </div>
            </div>
            <h2 className={`mt-5 text-[2.125rem] ${poppins500.className}`}>Our Daily Menu</h2>
          </div>

<div className='relative'>
  <div className='h-[350px] absolute'>
    <Image src={MenuBg} className='h-full object-cover rounded-[5px] brightness-50'/>
  </div>

  <div className='relative text-white p-[60px] flex justify-between items-center'>
<div className={`${poppins500.className}`}>
  <small className='uppercase text-sm'>Special Offer</small>
  <h3 className='text-4xl leading-tight'>Burgher Menu $18 only</h3>
  <p className={`mb-5 ${lora.className}`}>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
  <p className='py-2 px-[25px] text-sm bg-primary rounded-sm w-fit cursor-pointer hover:brightness-[115%]'>Reserve&nbsp;now</p>
</div>

<div className='hidden lg:block'>
<Image src={OfferDetails} />
</div>

  </div>
</div>

        </div>
      </section>


    </main>
  )
}
