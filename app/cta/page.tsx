import Link from 'next/link'
import React from 'react'

export default function CtaHighlight ()  {
  return (

    <Link href='/contact'>
     <button className="p-[5px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-100 rounded-lg" />
  <div className="px-8 py-3  bg-white-100 rounded-[6px]  relative group transition duration-300 text-black md:text-xl text-2xl hover:bg-transparent story-btn">
    Lets create your story today
  </div>
</button>
</Link> 

 
  )
}



