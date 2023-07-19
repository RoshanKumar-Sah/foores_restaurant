import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import { LiaSearchSolid } from "react-icons/lia"
import { BsBagDash } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Link from 'next/link'



const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export default function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>

            {/* {
            isOpen && <div className='absolute top-0  right-0 min-[481px]:w-1/2 h-screen bg-black/100 z-40'></div>
        } */}

            <header className={`py-[10px] min-[991px]:p-[15px] fixed w-full top-0 z-30`}>

                <div className='container flex justify-between max-w-full'>
                    <div className='min-[991px]:hidden -mt-2 -mb-2 h-21 w-21'>
                        <Hamburger toggled={isOpen} toggle={setOpen} distance='sm' rounded color='#ffffff' />
                    </div>
                    <Image src={Logo} alt='logo' className='w-[108px] h-[28px] min-[991px]:w-fit min-[991px]:h-fit' />
                    <nav className={`flex gap-4 min-[991px]:py-[5px]  text-sm leading-6 ${poppins.className}`}>


                        {
                            isOpen && <div className='absolute top-0  right-0 min-[481px]:w-1/2 h-screen bg-black/20 z-40'></div>
                        }
                        <ul className={` ${isOpen ? 'animate-slideRight flex flex-col absolute top-0 left-0 z-50 w-full min-[481px]:w-1/2 h-screen bg-white text-black' : 'hidden'} min-[991px]:flex min-[991px]:items-center min-[991px]:text-white min-[991px]:gap-4`}>


                            {
                                isOpen && <li className='bg-primary min-[991px]:hidden flex justify-center text-white relative'>
                                    <Image src={Logo} alt='logo' className='pt-[35px] pb-[25px]' />
                                    <AiOutlineClose size={24} onClick={() => { setOpen(false) }} className='absolute top-[15px] right-[15px] font-bold' />
                                </li>
                            }

                            <li className='transition duration-400 hover:text-primary p-[15px] min-[991px]:p-0 border-b min-[991px]:border-none'><Link href={"/"}>Home</Link></li>
                            <li className='transition duration-400 hover:text-primary p-[15px] min-[991px]:p-0 border-b min-[991px]:border-none'>Menu</li>
                            <li className='transition duration-400 hover:text-primary p-[15px] min-[991px]:p-0 border-b min-[991px]:border-none'>Other&nbsp;Pages</li>
                            <li className='transition duration-400 hover:text-primary p-[15px] min-[991px]:p-0 border-b min-[991px]:border-none'>Shop</li>
                            <li className='transition duration-400 hover:text-primary p-[15px] min-[991px]:p-0 border-b min-[991px]:border-none'>Buy&nbsp;this&nbsp;template</li>
                            <li className='border border-black bg-black min-[991px]:bg-transparent text-white min-[991px]:border-white p-[15px]  min-[991px]:px-[8px] min-[991px]:py-[5px] min-[991px]:rounded-[3px] transition duration-400 ease-in-out min-[991px]:hover:bg-primary min-[991px]:hover:border-primary '>Reservations</li>

                        </ul>

                        <ul className='flex min-[991px]:items-center text-white gap-4'>
                            <li className='h-fit'><LiaSearchSolid size={28} /></li>
                            <li className='relative h-fit'><BsBagDash size={24} className='inline-block' /> <p className='absolute -bottom-2 -right-1 bg-black border-black rounded-full px-1 text-xs '>2</p></li>

                        </ul>
                    </nav>
                </div>



            </header>

        </>
    )
}