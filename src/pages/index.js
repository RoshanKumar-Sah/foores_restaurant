
import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Banner from '@/components/Banner';
import Tile from '@/components/Tile';
import AboutUs from '@/components/AboutUs';
import DailyMenu from '@/components/DailyMenu';
import ContactUs from '@/components/ContactUs';
import Reserve from '@/components/Reserve';

import {BiMap} from "react-icons/bi"
import {AiFillTag} from "react-icons/ai"
import {CiClock2} from "react-icons/ci"
import {MdOutlineNavigateNext} from "react-icons/md"
import TwitterIcon from "@/assets/twitter_icon.svg"
import FacebookIcon from "@/assets/facebook_icon.svg"
import InstagramIcon from "@/assets/instagram_icon.svg"
import YoutubeIcon from "@/assets/youtube_icon.svg"



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



      


    </main>
  )
}
