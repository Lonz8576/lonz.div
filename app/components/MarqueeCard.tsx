"use client";

import React from "react";
import { InfiniteMovingCards } from "./Marquee";

export function MovingCards() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent  items-center align-middle justify-center relative overflow-hidden text-center">
      <InfiniteMovingCards
        items={quote}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const quote = [
  {
    quote:
      "  SAY HELLO",
  
  },
  {
    quote:
      "LET'S COLLABORATE",
   
  },
  {
    quote: "CREATE YOUR STORY",
 
  },
  {
    quote:
      "  LET'S TALK",
   
  },
  {
    quote:
      "FEEL FREE TO REACH OUT",
   
  },
 
 
];
