import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from "react";
import Slider from "react-slick";
import SildeImage1 from "@/assets/slide_home_1.jpg"
import SildeImage2 from "@/assets/slide_home_2.jpg"
import SildeImage3 from "@/assets/slide_home_3.jpg"
import DragIcon from "@/assets/drag_icon.svg"

const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export default function Banner() {

    const settings = {
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false
                }
            }],
        appendDots: dots => (
            <div
                style={{


                    margin: "50px 0px",

                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='border-2 border-white hover:border-primary rounded-full h-fit w-fit p-1 flex justify-center items-center'>
                <div className='h-2 w-2 bg-transparent border border-transparent rounded-full'>

                </div>
            </div>
        ),


    }

    return (
        <section className='relative h-[480px] md:h-[660px]'>
            <div className='md:hidden absolute bottom-8 right-8 z-30'>
                <Image src={DragIcon} alt='dragIcon' className='brightness-75' />
            </div>

            <Slider {...settings}>
                <div className='relative'>
                    <div className={`absolute z-10 top-1/3 right-4 md:right-36 ${poppins.className} flex flex-col items-end`}>
                        <h2 className='text-white font-black text-[2.875rem] uppercase text-right leading-none mb-2'>Taste<br />Unique Food</h2>
                        <p className='text-white font-normal text-[21px] leading-9 mb-5'>Cooking delicious food since 2005</p>
                        <p className='text-white text-right py-2 px-[25px] bg-primary w-fit border border-transparent rounded-sm text-sm font-medium cursor-pointer hover:brightness-[115%]' >Read&nbsp;More</p>
                    </div>
                    <Image src={SildeImage1} alt='slideImage' className='brightness-50 h-[480px] md:h-[660px] object-cover' />
                </div>

                <div className='relative'>
                    <div className={`absolute z-10 top-1/3 left-4 md:left-28 ${poppins.className} flex flex-col items-start`}>
                        <h2 className='text-white font-black text-[2.875rem] uppercase  leading-none mb-2'>Reserve<br />A&nbsp;Table&nbsp;Now</h2>
                        <p className='text-white font-normal text-[21px] leading-9 mb-5'>Cooking delicious food since 2005</p>
                        <p className='text-white text-right py-2 px-[25px] bg-primary w-fit border border-transparent rounded-sm text-sm font-medium cursor-pointer hover:brightness-[115%]' >Read&nbsp;More</p>
                    </div>
                    <Image src={SildeImage2} alt='slideImage' className='brightness-50 h-[480px] md:h-[660px] object-cover' />
                </div>

                <div className='relative'>
                    <div className={`absolute z-10 top-1/3 left-0 ${poppins.className} flex flex-col items-center w-full`}>
                        <h2 className='text-white font-black text-[2.875rem] uppercase text-center  leading-none mb-2'>Enjoy<br />A&nbsp;Friends&nbsp;Dinner</h2>
                        <p className='text-white font-normal text-[21px] leading-9 mb-5'>Cooking delicious food since 2005</p>
                        <p className='text-white text-right py-2 px-[25px] bg-primary w-fit border border-transparent rounded-sm text-sm font-medium cursor-pointer hover:brightness-[115%]' >Read&nbsp;More</p>
                    </div>
                    <Image src={SildeImage3} alt='slideImage' className='brightness-50 h-[480px] md:h-[660px] object-cover' />
                </div>
            </Slider>
        </section>
    )
}