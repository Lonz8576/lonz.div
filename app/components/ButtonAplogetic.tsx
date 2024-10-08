import React from 'react'

const ButtonAplogetic = ({
  handleClick, title
} :{
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  title: string;
}
) => {
  return (
    <div>
      
      <button onClick={handleClick}    className="px-5 py-2   border border-white-100 bg-transparent rounded-md text-black  dark:border-white relative group transition duration-300">
        <div className="absolute space-x-4 -bottom-2 -right-2 bg-blue-100 rounded-md border-white-100 h-full w-full z-2 group-hover:bottom-0 group-hover:right-0 transition-all duration-300" />
        <span className="relative email-btn ">
            {title}
        </span>
        </button>
        
    </div>
  )
}

export default ButtonAplogetic


