import Link from 'next/link'
import React from 'react'





export default function ShimmerBtn ()  {
  return (
    <div>
<Link href='./work/page'>
<button className="relative inline-flex max-h-16 h-14  mb-4 overflow-hidden rounded-lg  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/[.8] px-6 py-0 text-2xl uppercase  font-bold text-white backdrop-blur-3xl">
    View Work
  </span>
</button>

</Link>
</div>

  )
}



