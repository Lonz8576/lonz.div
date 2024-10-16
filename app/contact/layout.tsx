import React from 'react'

export default function layout({
    children, 
}: {
  children: React.ReactNode
}) {
 
  return (
    <div className="relative bg-black-100 flex align-middle items-center h-full pb-80  overflow-hidden mx-auto sm:px-10 px-20">
        <div>
        {children}
        </div>
    </div>
  )
}



