import React from 'react'

const ButtonAplogetic = ({
  handleClick, title
} :{
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  title: string;
}
) => {
  return (
    <div className='md:px-5 lg:px-1 '>
      
      <button onClick={handleClick}    className="px-5 py-3  border border-white-100 bg-transparent rounded-lg text-black  relative group transition duration-300">
        <div className="absolute space-x-4 -bottom-2 -right-2 bg-blue-100 border-white-100 h-full w-full z-2 group-hover:bottom-0 group-hover:right-0 transition-all duration-300 rounded-lg" />
        <span className="relative flex lg:text-xl md:text-lg sm:text-md email-btn ">
            {title}
        </span>
        </button>
        
    </div>
  )
}

export default ButtonAplogetic


