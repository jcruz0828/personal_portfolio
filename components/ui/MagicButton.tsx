import React, { ReactNode } from 'react'

export const MagicButton = ({title,icon,position,handleClick,otherClasses}:{title:string,icon:ReactNode,position:string,handleClick?: ()=>void,otherClasses?:string}) => {
  return (
    <button className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    onClick={handleClick}>
 <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7  text-xs font-medium text-white backdrop-blur-3xl gap-2  ${otherClasses}`}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
  )
}
