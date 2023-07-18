import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import { LiaSearchSolid } from "react-icons/lia"
import { BsBagDash } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import Hamburger from 'hamburger-react'
import { Fragment, useState } from 'react'
import Link from 'next/link'


const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export default function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
        
        {
            isOpen && <div className='absolute top-0 bottom-0 right-0 sm:w-1/2 bg-black/20 z-40'></div>
        }

        <header className={`py-[10px] md:p-[15px] fixed w-full top-0 z-30`}>
        
            <div className='container flex justify-between max-w-full'>
                <div className='md:hidden -mt-2 -mb-2 h-21 w-21'>
                    <Hamburger toggled={isOpen} toggle={setOpen} distance='sm' rounded color='#ffffff' />
                </div>
                <Image src={Logo} alt='logo' className='w-[108px] h-[28px] md:w-fit md:h-fit' />
                <nav className={`flex gap-4 md:py-[5px]  text-sm leading-6 ${poppins.className}`}>

                    <ul className={` ${isOpen ? 'flex flex-col absolute top-0 left-0 z-50 w-full sm:w-1/2 h-screen bg-white text-black' : 'hidden'} md:flex md:items-center md:text-white md:gap-4`}>
                        {
                            isOpen && <li className='bg-primary flex justify-center text-white relative'>
                                <Image src={Logo} className='pt-[35px] pb-[25px]' />
                                <AiOutlineClose size={24} onClick={() => { setOpen(false) }} className='absolute top-[15px] right-[15px] font-bold' />
                            </li>
                        }

                        <li className='transition duration-400 hover:text-primary p-[15px] md:p-0 border-b md:border-none'><Link href={"/"}>Home</Link></li>
                        <li className='transition duration-400 hover:text-primary p-[15px] md:p-0 border-b md:border-none'>Menu</li>
                        <li className='transition duration-400 hover:text-primary p-[15px] md:p-0 border-b md:border-none'>Other&nbsp;Pages</li>
                        <li className='transition duration-400 hover:text-primary p-[15px] md:p-0 border-b md:border-none'>Shop</li>
                        <li className='transition duration-400 hover:text-primary p-[15px] md:p-0 border-b md:border-none'>Buy&nbsp;this&nbsp;template</li>
                        <li className='border border-black bg-black md:bg-transparent text-white md:border-white p-[15px]  md:px-[8px] md:py-[5px] md:rounded-[3px] transition duration-400 ease-in-out md:hover:bg-primary md:hover:border-primary '>Reservations</li>

                    </ul>

                    <ul className='flex md:items-center text-white gap-4'>
                        <li className='h-fit'><LiaSearchSolid size={28} /></li>
                        <li className='relative h-fit'><BsBagDash size={24} className='inline-block' /> <p className='absolute -bottom-2 -right-1 bg-black border-black rounded-full px-1 text-xs '>2</p></li>

                    </ul>
                </nav>
            </div>



        </header>

</>
    )
}