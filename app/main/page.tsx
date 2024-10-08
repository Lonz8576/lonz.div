import React from 'react'
import { BentoGrid, BentoGridItem } from '../grid/page'
import { gridItems } from '../components';
import  BackgroundBox  from '../components/BoxCta';




export default function Main () {
  return (
    <section id='home' className='pb-10'>
        <BentoGrid>
        {gridItems.map (({ id, title, description, className, img, imgClassName, titleClassName, spareImg} ) => (
            <BentoGridItem  
            id={id} 
             key={id} 
             title={title} 
             description={description}  
             className={className}
             img={img}
             imgClassName={imgClassName}
             titleClassName={titleClassName}
             spareImg={spareImg}
              />
        ))}
        </BentoGrid>
        <div className='flex relative w-full my-5'>

          <BackgroundBox />
         
          </div>
      
    </section>
  );
}



