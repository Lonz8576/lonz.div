'use client'

import React from 'react'
import  { TextGenerateEffect } from '../components/TextGenerateEffect'
import ButtonAplogetic from '../components/ButtonAplogetic'
import ButtonResume from '../components/ButtonResume'
import Image from 'next/image'
import git from "../../public/git.svg"
import linkedin from "../../public/linkedin icon.svg"
import Link from 'next/link'


const linksite= 'www.linkedin.com/in/nicalonso'

const Hero = () => {
  return (
    <div className='pt-40 px-4'>
      <div>     
      </div>
      <div className='h-screen w-full relative grid grid-cols-1 sm:flex md:grid-cols-2  gap-x-10 items-center px-8'>
      <div className=' w-full relative  bottom-40 items-center'> 

      <div className='relative text-start items-center grid  grid-rows pt-20 '>

        <div className=' items-center left-3 relative'>

            <h2 className=' relative items-center md:text-[22px]  text-start sm:text-sm  lg:text-[28px]  text-blue-100 font-semibold hi grid-rows-2 '>HI!</h2>
      </div>
      <div className='items-center'>
            <TextGenerateEffect  className='text-start  text-[42px] md:text-4xl  lg:text-5xl sm:text-1xl relative  2xl:text-7xl pt-2 items-center m-w-[40vw] title-text'
           words="I'm Nichole, you can call me Nic" />
           </div>
           <div className='grid grid-rows-subgrid'>
            <div className='row-start-4 intro text-white-100 tracking-widest pt-5 '>
       I&apos;m a Frontend Developer who loves problem-solving, bringing ideas to life to give the best overall user experience. Based in the U.S
       </div>
    </div>
      <a href="/about" target='_blank' > 
    <span className='row-start-7 mt-8 text-white-100 tracking-widest flex  justify-center  text-[20px] about-me-link'>
        Know more
        </span>
       
         <span className='about-link flex px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" stroke-width="2.5" stroke="currentColor" className="size-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg> <span className='flex px-3'>about me</span>
       
        </span>
        </a>
        
        <div className='follow-me flex text-white-100 row-start-10 justify-center align-middle py-5'>
            <picture className='flex text-center justify-between align-middle'>
              Follow me:
                <a href='https://github.com/Lonz8576'>
               <Image src={git} alt='github' width={30} height={30} className='mx-3' />
               </a>
                <a href={linksite}>
              <Image src={linkedin} alt='linkedin' width={30} height={30} />
              </a>

              </picture>
            </div>

          <div className='flex justify-evenly'>
            <Link href='mailto:8576nic@gmail.com' target='_blank'>
                <ButtonAplogetic title='Email Me' />
            </Link>
            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:444de5d1-9750-4511-a98a-ebc2a149b573' target='_blank'> 
              <ButtonResume />
              </a>
              
            </div>

            
                 
        </div>
        </div>
        <div className='images ms-8 sm:flex'>
          <picture>
        <img className=' headshot flex relative w-fit -top-20 shadow-lg items-center  justify-between ' src= 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/128/064/original/20211002_105331-EDIT-EDIT.jpg?1717359345'   alt='Nics headshot' />
        </picture>
          
           </div>


      </div>
    </div>
  )
}

export default Hero

