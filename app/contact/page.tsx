

import React from "react";
import ContactBtn from "../components/ContactBtn";
import { MovingCards } from "../components/MarqueeCard";







export default function ContactPage () {
  


  return (
    <div>
    <div className="flex lg:text-4xl md:text-2xl pt-40 pb-10 w-75 relative text-white-100 text-left tracking-wider text-wrap contact-heading "  >
      Are <span className="text-blue-100 uppercase mx-2"> you </span> ready to create your story<span className="text-blue-100 uppercase">?</span>
    </div>
    <div className="flex relative md:text-lg lg:text-xl text-white-100 w-80">
    Got a question, proposal or project or want to work together on something?
    </div>
    <div className="grid grid-cols-2 gap-x-10 mx-20 " >
   
    <div>
        <MovingCards />
    </div>
    <div className="">
    <ContactBtn />

    </div>
    </div>
    </div>

  )
}
