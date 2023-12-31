import { Poppins } from 'next/font/google'
import Image from 'next/image'
import HomeImage from "@/assets/home_1.jpg"
import SignatureImage from "@/assets/signature.png"
import { BsFillPlayFill } from "react-icons/bs"
import { useRef } from 'react'
import useOnScreen from '@/hooks/useOnScreen'

const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const poppins300 = Poppins({ subsets: ['latin'], weight: '300' })

export default function AboutUs() {

    const ref = useRef();
    const isOnScreen = useOnScreen(ref);

    return (
        <section className={`relative h-fit  ${poppins500.className} bg-white md:bg-pattern bg-cover`}>
            <div className='relative gap-24 flex justify-center pt-[60px] pb-[40px] lg:pt-[120px] lg:pb-[100px]'>
                <div ref={ref} className={`mx-3 w-1/2 relative hidden lg:flex justify-end ${isOnScreen ? "animate__animated animate__delay-0.9s animate-cUp" : " "} `}>
                    <Image src={HomeImage} alt='homeimage' />
                    <div className='spiral absolute group bottom-8 right-8 h-[45px] w-[45px] bg-white flex justify-center items-center rounded-full cursor-pointer'>
                        <BsFillPlayFill size={21} className='text-[#c3c3c3] group-hover:text-primary' />
                    </div>
                </div>
                <div ref={ref} className={`w-full lg:w-1/2 p-3 ${isOnScreen ? "animate__animated animate__delay-0.9s lg:animate__delay-1s animate-cUp" : " "}`}>
                    <div className='lg:max-w-[600px]'>
                        <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border'>
                            <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
                            </div>
                        </div>
                        <h2 className='mt-5 text-[2rem] leading-[38px] text-header'>Some words about us</h2>
                        <p className={`mb-[25px] ${poppins300.className} text-content text-lg`}>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        <p className={`mb-5 ${poppins300.className} text-content text-sm leading-[1.7]`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className={`mb-9 ${poppins300.className} text-content text-sm leading-[1.7]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Image src={SignatureImage} alt='signature' />
                    </div>
                </div>
            </div>
        </section>
    )
}