import React from "react";
import { BackgroundBeamsWithCollision } from "./components/Spotlight";
import  Main  from "./main/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <BackgroundBeamsWithCollision>
     <Hero />
     </BackgroundBeamsWithCollision>
      <Main />
    
    </div>
   </main>
  );
}
