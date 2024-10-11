import React from 'react'

export default function layout({
    children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
 
  return (
    <div className="relative bg-black-100 flex justify-center items-center h-full pb-80  overflow-hidden mx-auto sm:px-10 px-5">
        <div>
        {children}
        </div>
    </div>
  )
}



