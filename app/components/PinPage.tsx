

import React from 'react'
import { projects } from '../components'
import { MdArrowForwardIos } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PinContainer } from '../components/Pin-3d';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';



const git= <Link href='https://github.com/Lonz8576'><FaGithub /></Link> 


export default function PinPage () {
 
  return (
    <div className=" w-full h-full relative bg-black-100 flex justify-center  mx-auto sm:px-10 px-10 pb-30">
      <h1 className='heading flex relative text-start top-44 text-blue-100 lg:text-6xl md:text-4xl sm:text-2xl pb-20 hover:underline leading-loose font-bold'>
        Projects {'  '}
        <span className='text-white-100'> . </span>
      </h1>
      <div className=' basis-full flex-wrap items-center relative justify-center gap-y-16 gap-x-80 me-40 mt-40 flex'>
          {projects.map((
            {
              id,
              title,
              des,
              img,
              iconLists,
              link,
            } ) => (
              <div key={id} className='h-[40rem] px-10 relative items-center mt-40 p-5 justify-center flex me-10 sm:w-96 pe-10 w-full'> 
                <PinContainer   title={title} href={link}  >
                  
                   
                    <div className="flex w-[40rem] mx-1 text-white-100 h-20 overflow-hidden p-2 md:text-3xl xl:text-4xl sm:text-lg font-bold ">
                    <MdArrowForwardIos />  {title}<span className='flex ms-16'> {git}</span>
                    </div>
                    <div className='text-cyan-500 lg:text-xl text-md  pb-10'>
                      {des}
                    </div>
                    <div className='h-[25rem] overflow-hidden w-fit relative justify-center justify-items-center place-self-center'>
                      <img
                        src={img}
                        alt={title}
                        width={200}
                        height={200}
                        className='z-10 relative flex align-bottom justify-center items-center w-full  overflow-hidden rounded-lg' />
                        </div>
                        
                        <div className='my-6 h-10 flex items-center justify-between '>
                          <div className='flex items-center justify-items-center'>
                          {iconLists.map((icon, index) =>  (
                          <div key={icon}className='border border-white/[0.5] rounded-full lg:w-18 lg:h-18 w-14 h-14 flex justify-center items-center  bg-black' 
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`
                          }} >
                            <img src={icon} alt={icon} className='bg-black'/>

                          </div>
                         )) }
                          </div>

                          <div className='flex text-teal-500 font-bold text-3xl  '>
                          <p>
                            Live
                          </p>
                          <FaLongArrowAltRight className='mx-4' color='#ef6c35' />
                          </div>
                     
                        </div>
                    

                </PinContainer>
              </div>
          ) )  
          }


      </div>
    </div>
  )
}

