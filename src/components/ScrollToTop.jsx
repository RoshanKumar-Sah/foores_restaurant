import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import * as Scroll from 'react-scroll';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);
    let scroll = Scroll.animateScroll;


    useEffect(() => {
        let handleScroll = () => {

            let scrollThreshold = 750;
            setShowButton(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
        scroll.scrollToTop({ smooth: true, duration: 1000, delay: 500 });
    }
    return (
        <section className='fixed right-4 bottom-4 z-0 cursor-pointer' onClick={scrollToTop}>
            {
                showButton && <div className='bg-black/50 hover:bg-primary rounded-full p-1'>
                    <MdOutlineKeyboardArrowUp size={36} color='white' />
                </div>
            }

        </section>
    )
}