
import React from "react";
import { Boxes } from  '../components/BackgroundBox';
import { cn } from "../components/lib/util";
import CtaHighlight from "./page";

export function BackgroundBox() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-5xl text-white font-semibold relative z-20 text-center m-2 box-font")}>
      Building web experiences that tell a story and the journey it takes you on.
      </h1>
      <p className="text-center p-4 text-white-100 relative z-20">
       <CtaHighlight />
      </p>
    </div>
  );
}
