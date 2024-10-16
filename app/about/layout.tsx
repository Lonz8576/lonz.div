import { HoverEffect } from "../components/HoverEffect"

export default function aboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
   
    return (
      <div className="relative bg-black-100 flex justify-center items-center h-full pb-80  overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-lg w-1/2  text-wrap justify-center -top-72   mb-20 sm:hidden lg:flex relative -rotate-90">
         <HoverEffect text='my background' duration={20} />

         </div>
        
    
         {children}
        </div>
   
    
     
    )
  }

