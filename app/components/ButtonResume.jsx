
import React from 'react'

export default function ButtonResume () {
  return (
    <div>
    
      <button className="px-4 py-2 border border-white-100 bg-transparent rounded-lg text-white-100  relative group transition duration-300">
        <div className="absolute -bottom-2 -right-2 rounded-lg border-white-100 h-full w-full z-20  group-hover:bottom-0 group-hover:right-0 transition-all duration-300 res-btn"   />
        <span className="relative resume-btn rounded-lg text-white-100 lg:text-xl md:text-lg sm:text-md  z-20">
            Download CV→
        </span>
        </button>
     

    </div>
  )
}



