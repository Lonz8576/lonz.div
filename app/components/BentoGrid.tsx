/* eslint-disable @next/next/no-img-element */
import { cn } from "./lib/util";
import { FlipWord } from "./FlipStack";
import ShimmerBtn from "../grid/layout";
 



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-3 md:grid-cols-3 gap-5 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  spareImg,
  img,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?:string;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden relative  shadow-input bg-gradient-to-b from-blue-100/[0.4] to-black-200/50  border-4 border-blue-100 justify-between flex flex-col space-y-2 grid-bento",
        className
      )}

    >
      
      
         
        <div className="font-normal text-white-100 bento-title">
        {title}
      <div className=" bento-description">
      
          <div className="flex relative justify-center py-1">
          {id === 2 && <ShimmerBtn />}
          {description} 
          </div>
          
          <div className="flex relative justify-center">
         
            
        
          {img && (
            <img src={img}
            alt={img}
            className={cn (imgClassName, "object-center, object-cover overflow-hidden h-50")}
            />
        ) }
         
           
         
        </div>
        {id === 3 && (
           <FlipWord />
        )}
        </div>
        {imgClassName}
        {titleClassName}
        {spareImg}
      </div>
    </div>
  );
};
