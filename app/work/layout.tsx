import React from "react";

export default function WorkLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    

    return (

      <div className="relative bg-black-100 flex justify-center items-center h-full pb-80 flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">

         </div>
         {children}
         
       <div>
       
       </div>
     
        </div>    
    );
  }
