import { Poppins, Lora } from 'next/font/google'


const poppins500 = Poppins({ subsets: ['latin'], weight: '500' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function ContactUs(){
    return(
        <section>
        <div className='w-full h-fit bg-transparent flex justify-center'>

          <div className=' w-full md:w-[550px] mx-3 bg-black text-white my-[120px]'>
            <div className={`${poppins500.className} p-[45px] justify-center text-center flex flex-col gap-5`}>
              <h2 className={`text-[2.625rem] leading-none`}>Celebrate<br /><span className={`text-2xl ${lora.className}`}>a Special Event with us!</span></h2>
              <p className='leading-[1.7] text-base brightness-75 mb-5 font-normal'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

              <div className='flex justify-center'>
                <p className='bg-primary w-fit px-[25px] py-2 rounded-[3px] cursor-pointer hover:brightness-[115%]'>Contact&nbsp;us</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    )
}