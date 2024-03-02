import Image from 'next/image'
import React from 'react'


type CardProps = {
  name: string;
  title: string;
  img: string;
  border: 'border-b-[1px]' | 'border-t-[1px]';
}

const Card = ({name, title, img, border}: CardProps) => {
  return (
    <div className="relative flex flex-1 items-start justify-center mb-2">
        <div className="relative z-20 flex w-[250px] flex-col cursor-pointer
        gap-8 rounded-3xl bg-[#000000] ${border}
        border-[#1aa64b] px-7 py-8 hover:bg-[#212121] hover:border-b-0">
            <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <p className="text-[16px] font-[400] text-gray-400 truncate">{name}</p>
            </div>
            <p className="text-[20px] font-[700] text-white truncate">{title}</p>
        </div>
        <div className='flex justify-between'>
          <Image src={img} alt="close" width={90} height={24} className=' rounded-md ' />
          <button className=' rounded-full hover:mb-[2px]'>
            <Image src="/heart(2).png" alt="close" width={14} height={14} className=' hover:cursor-pointer' />
          </button>
        </div>
        </div>
    </div>
  )
}

export default Card