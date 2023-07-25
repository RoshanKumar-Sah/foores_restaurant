import { Poppins, Lora } from 'next/font/google'
import Image from 'next/image'
import MenuBg from "@/assets/banner_bg.jpg";
import OfferDetails from "@/assets/banner.svg";
import SummerBerry from "@/assets/summers_berry.jpg"
import PumpkinCookies from "@/assets/pumpkin_cookies.jpg"
import ChocolateCupcakes from "@/assets/chocolate_cupcakes.jpg"
import SoftShellCrab from "@/assets/soft_shell_crab.jpg"
import CoconutTart from "@/assets/coconut_tart.jpg"
import CoookiesCreamCheese from "@/assets/cookies_cream_cheese.jpg"
import ChocolateCupcakes2 from "@/assets/chocolate_cupcakes_2.jpg"
import SoftShellCrab2 from "@/assets/soft_shell_crab_2.jpg"
import { useRef } from 'react'
import useOnScreen from '@/hooks/useOnScreen'

const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function DailyMenu() {

    const ref = useRef();
    const isOnScreen = useOnScreen(ref);

    return (
        <section className='bg-[#F4F4F4]'>
            <div ref={ref} className=' xl:mx-[140px] pt-[120px] pb-[100px] px-3'>
                <div className={`${isOnScreen ? "animate__animated animate__delay-0.9s animate-cUp" : " "}`}>
                    <div className={`mb-12 flex flex-col justify-center items-center`}>
                        <div className='w-[120px] h-[2px] bg-[#e1e1e1] rounded-md box-border flex justify-center'>
                            <div className='w-[60px] h-[2px] bg-primary  rounded-md'>
                            </div>
                        </div>
                        <h2 className={`mt-5 text-[2.125rem] ${poppins500.className}`}>Our Daily Menu</h2>
                    </div>

                    <div className={`relative min-h-[350px]`}>
                        <div className='h-[350px] absolute w-full'>
                            <Image src={MenuBg} alt='menuBackground' className='h-full w-full object-cover rounded-[5px] brightness-50' />
                        </div>

                        <div className='relative text-white p-[60px] flex justify-between items-center'>
                            <div className={`${poppins500.className}`}>
                                <small className='uppercase text-sm'>Special Offer</small>
                                <h3 className='text-4xl leading-tight'>Burgher Menu $18 only</h3>
                                <p className={`mb-5 ${lora.className}`}>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                                <p className='py-2 px-[25px] text-sm bg-primary rounded-sm w-fit cursor-pointer hover:brightness-[115%]'>Reserve&nbsp;now</p>
                            </div>

                            <div className='hidden lg:block'>
                                <Image src={OfferDetails} alt='offer' />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={ref} className='mt-[80px] mb-[25px] flex flex-col lg:flex-row'>
                    <ul className='w-full lg:w-1/2 px-3'>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={SummerBerry} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Summers&nbsp;Berry</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$8</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Raspberries, Blackberries</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "} `}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={PumpkinCookies} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Pumpkin&nbsp;Cookies</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$11</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Pumpkin, Sugar, Butter</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={ChocolateCupcakes} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Chocolate&nbsp;Cupcakes</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$14</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Chocolate, Eggs, Vanilla</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={SoftShellCrab} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Soft&nbsp;shell&nbsp;crab</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$14</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Chicken, Potato, Salad</p>
                            </div>
                        </li>
                    </ul>


                    <ul ref={ref} className='w-full lg:w-1/2 px-3'>
                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={CoconutTart} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Coconut&nbsp;Tart</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$10</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Blueberries, Graham cracker crumbs</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={CoookiesCreamCheese} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Cookies&nbsp;Cream&nbsp;Cheese</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$14</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Sugar, Butter, Eggs</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={ChocolateCupcakes2} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Chocolate&nbsp;Cupcakes</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$14</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Chocolate, Eggs, Vanilla</p>
                            </div>
                        </li>

                        <li className={`flex w-full items-center mb-[30px] ${isOnScreen ? "animate__animated animate__delay-1s animate-cUp" : " "}`}>
                            <div className='min-w-[80px] cursor-pointer'>
                                <Image src={SoftShellCrab2} alt='menuImage' className=' max-w-[80px] rounded-full  object-cover' />
                            </div>
                            <div className='w-full'>
                                <div className={`pl-[10px] flex items-baseline text-sm text-content ${poppins500.className} `}>
                                    <h3 className={`text-header text-lg`}>Soft&nbsp;shell&nbsp;crab</h3>
                                    <hr className='h-[4px] mx-[3px] w-full border-t-2 border-[#d5d5d5] border-dotted' />
                                    <p>$14</p>
                                </div>
                                <p className={`${lora.className} text-content pl-[10px]`}>Chicken, Potato, Salad</p>
                            </div>
                        </li>
                    </ul>

                </div>

                <div ref={ref} className='flex justify-center'>
                    <p className={`border-2 px-[15px] py-[6px] text-[#111111] text-sm rounded-[3px] border-[#111111] ${poppins500.className} hover:text-primary hover:border-primary cursor-pointer animate__animated animate__delay-1s animate__zoomIn`}>Download Menu</p>
                </div>

            </div>
        </section>
    )
}