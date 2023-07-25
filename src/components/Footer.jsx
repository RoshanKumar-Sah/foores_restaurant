import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import { BiMap } from "react-icons/bi"
import { AiFillTag } from "react-icons/ai"
import { CiClock2 } from "react-icons/ci"
import { MdOutlineNavigateNext } from "react-icons/md"
import TwitterIcon from "@/assets/twitter_icon.svg"
import FacebookIcon from "@/assets/facebook_icon.svg"
import InstagramIcon from "@/assets/instagram_icon.svg"
import YoutubeIcon from "@/assets/youtube_icon.svg"


const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })


export default function Footer() {
  return (
    <section className='bg-[#262626] xl:px-[140px] px-3 pt-[60px] pb-[20px] text-white'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-[35px]'>

        <div className='flex gap-5'>
          <div className='opacity-60 hidden sm:block'>
            <BiMap size={30} />
          </div>
          <div>
            <h3 className={`mb-[15px] text-lg ${poppins500.className}`}>Address</h3>
            <p className={`opacity-60 ${poppins300.className} text-sm`}>97845 Baker st. 567 <br />Los Angeles - US</p>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='opacity-60 hidden sm:block'>
            <AiFillTag size={30} />
          </div>
          <div>
            <h3 className={`mb-[15px] text-lg ${poppins500.className}`}>Reservations</h3>
            <p className={`opacity-60 ${poppins300.className} text-sm`}>+94 423-23-221<br />reservations@Foores.com</p>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='opacity-60 hidden sm:block'>
            <CiClock2 size={30} />
          </div>
          <div>
            <h3 className={`mb-[15px] text-lg ${poppins500.className}`}>Opening Hours</h3>
            <p className={`opacity-60 ${poppins300.className} text-sm`}>Mon - Sat: 10am - 11pm<br />Sunday: Closed</p>
          </div>
        </div>

        <div className='flex gap-5 w-full'>
          <div className='w-full'>
            <h3 className={`mb-[15px] text-lg ${poppins500.className}`}>Keep in touch</h3>
            <form className='flex h-fit w-full'>
              <input type='email' placeholder='Your email' className='bg-[#313131] p-[10px] pl-[15px] w-full outline-none' /><button className='flex p-[10px] justify-center items-center h-full bg-primary hover:brightness-[115%]'><MdOutlineNavigateNext size={30} /></button>
            </form>
          </div>
        </div>

      </div>

      <hr className='my-[30px] opacity-20 rounded-md' />

      <div className='flex flex-col sm:flex-row justify-between gap-[25px]'>
        <p className={`opacity-60`}>© Foores Restaurant - All rights reserved</p>
        <div className='flex gap-[10px] mb-[25px]'>
          <Image src={TwitterIcon} alt='twitterIcon' className='h-[30px] w-[30px]' />
          <Image src={FacebookIcon} alt='facebookIcon' className='h-[30px] w-[30px]' />
          <Image src={InstagramIcon} alt='instagramIcon' className='h-[30px] w-[30px]' />
          <Image src={YoutubeIcon} alt='youtubeIcon' className='h-[30px] w-[30px]' />
        </div>
      </div>

    </section>

  )
}