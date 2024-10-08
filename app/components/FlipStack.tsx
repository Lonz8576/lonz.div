import React from "react";
import { FlipWords } from "../components/FlipWords";

export function FlipWord() {
  const words = ["Javascript", "React", "Tailwind CSS", "Typescript", "HTML", "GIT", "Figma", "Wordpress", "PHP", "AG Grid"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-2">
      <div className="text-2xl mx-auto font-normal text-center lg:text-3xl text-white-100 ">
        Tech Stack:
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}
