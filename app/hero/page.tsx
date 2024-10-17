import React from 'react'
import  { TextGenerateEffect } from '../components/TextGenerateEffect'
import ButtonAplogetic from '../components/ButtonAplogetic'
import ButtonResume from '../components/ButtonResume'
import Image from 'next/image'
import git from "../../public/git.svg"
import linkedin from "../../public/linkedin icon.svg"
import Link from 'next/link'
import headshot from '../../public/headshot.jpg'

const linksite= 'www.linkedin.com/in/nicalonso'

const Hero = () => {
  return (
    <div className='pt-40 px-4'>
      <div>     
      </div>
      <div className='h-screen w-full relative grid grid-cols-2 gap-x-10 items-center px-8'>
      <div className=' w-full relative  bottom-40 items-center'> 

      <div className='relative text-start items-center grid  grid-rows pt-20 '>

        <div className=' items-center left-3 relative'>

            <h2 className=' relative items-center md:text-[22px]  text-start sm:text-sm  lg:text-[28px]  text-blue-100 font-semibold hi grid-rows-2 '>HI!</h2>
      </div>
      <div className='items-center flex sm:justify-center'>
            <TextGenerateEffect  className='text-start  text-[42px] md:text-4xl xs:text-lg sm:text-2xl  lg:text-5xl relative  2xl:text-7xl pt-2 items-center m-w-[40vw] title-text'
           words="I'm Nichole, you can call me Nic" />
           </div>
           <div className='grid grid-rows-subgrid'>
            <div className='row-start-4 intro text-white-100  tracking-widest pt-5 '>
       I&apos;m a Frontend Developer who loves problem-solving, bringing ideas to life to give the best overall user experience. Based in the U.S
       </div>
    </div>

    <div className='row-start-7 mt-8 text-white-100 tracking-widest flex  justify-center  text-[20px] about-me-link lg:text-2xl md:text-lg sm:text-md '>
        Know more
         <span className='about-link flex px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" stroke-width="2.5" stroke="currentColor" className="size-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg> <span className='flex px-3'>about me</span>
        </span>
        </div>
        <div className='follow-me flex text-white-100 row-start-10 justify-center align-middle py-5'>
            <picture className='flex text-center sm:justify-center justify-evenly align-middle sm:gap-6'>
              Follow me:
                <a href='https://github.com/Lonz8576'>
               <Image src={git} alt='github' width={30} height={30} className='mx-3' />
               </a>
                <a href={linksite}>
              <Image src={linkedin} alt='linkedin' width={30} height={30} />
              </a>

              </picture>
            </div>

          <div className=' flex justify-evenly md:justify-around sm:justify-around  sm:pb-10 md:pb-0'>
            <Link href='mailto:8576nic@gmail.com' target='_blank'>
                <ButtonAplogetic title='Email Me' />
            </Link>
            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e99add4c-cfe5-490e-89bc-06c18bf93b58' target='_blank'> 
              <ButtonResume />
              </a>
              
            </div>

            
                 
        </div>
        </div>
        <div className='images mb-20 pb-20 md:flex justify-evenly xs:hidden sm:hidden '>
          <picture>
        <Image src={headshot} width={300}  height={300} className='flex headshot relative -top-10  shadow-lg items-center  justify-between' alt='Nics headshot' />
        </picture>
          
           </div>


      </div>
    </div>
  )
}

export default Hero

