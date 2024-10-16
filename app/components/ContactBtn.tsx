'use client'
import React from 'react'
import Script from "next/script";

export default function ContactBtn () {
    
  return (
    <div>
        <form>
    <iframe data-tally-src="https://tally.so/embed/nGJEpp?alignLeft=1&dynamicHeight=1" loading="lazy" width="100%" height="372" title="Contact
"  className='rounded-lg border-blue-100 border-2'id='Tally' ></iframe>
        <Script async src="https://tally.so/widgets/embed.js" id='Tally'   onLoad={(e) => e.target.contentWindow.load()}  
            />
    </form>
    </div>
  )
}



