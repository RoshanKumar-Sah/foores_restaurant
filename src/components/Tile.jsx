
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import TileImage1 from "@/assets/banner_1.jpg"
import TileImage2 from "@/assets/banner_2.jpg"
import TileImage3 from "@/assets/banner_3.jpg"


const poppins = Poppins({ subsets: ['latin'], weight: '500' })
const lora = Lora({ subsets: ['latin'], weight:'400' })

export default function Tile(){
    return(
        <section className='bg-white py-[5px] text-white'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[5px]'>

          <div className='h-[150px] md:h-[250px] relative'>
            <div className={`absolute w-full h-full flex flex-col justify-center items-center z-10 ${poppins.className}`}>
              <h3 className={`text-[1.625rem] font-black uppercase leading-[1.2]`}>Our Menu</h3>
              <p className={`${lora.className} text-lg`}>View Our Specialites</p>
            </div>
            <Image src={TileImage1} alt='tileImage' className='brightness-50 h-full w-full hover: object-cover cursor-pointer' />
          </div>

          <div className='h-[150px] md:h-[250px] relative'>
            <div className={`absolute w-full h-full flex flex-col justify-center items-center z-10 ${poppins.className}`}>
              <h3 className={`text-[1.625rem] font-black uppercase leading-[1.2]`}>Delivery</h3>
              <p className={`${lora.className} text-lg  px-4 text-center`}>Home delivery or take away food</p>
            </div>
            <Image src={TileImage2} alt='tileImage' className='brightness-50 h-full w-full object-cover cursor-pointer' />
          </div>

          <div className='h-[150px] md:h-[250px] relative'>
            <div className={`absolute w-full h-full flex flex-col justify-center items-center z-10 ${poppins.className}`}>
              <h3 className={`text-[1.625rem] font-black uppercase leading-[1.2]`}>Inside Foores</h3>
              <p className={`${lora.className} text-lg`}>View the Gallery</p>
            </div>
            <Image src={TileImage3} alt='tileImage' className='brightness-50 h-full w-full object-cover cursor-pointer' />
          </div>

        </div>
      </section>
    )
}