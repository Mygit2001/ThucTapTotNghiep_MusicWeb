import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom';
const Artists = ({thumbnail, title, link}) => {
  const [isHover, setisHover] = useState(false);
  return (
    <div className='w-1/5 flex flex-col gap-[14px]'>
      <Link
        className='relative overflow-hidden'
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        to = {link}
      >
        <img src ={thumbnail} className={`rounded-md  w-full object-content ${isHover && 'animate-scale-image'}`}/>
        {isHover && <div className='absolute top-0 right-0 left-0 bottom-0 bg-transparent-05 rounded-md'></div>}
      </Link>
      <div className='flex flex-col gap-1 items-center'>
        <Link to={link} className='font-semibold text-[16px] text-center text-red-900 mb-2'>{title}</Link>
        <button 
          type='button' 
          className='font-semibold text-sm bg-blue-500 text-center rounded-[50px] py-1 px-4 text-gray-100 flex items-center justify-center gap-1'>
          Theo dõi
        </button>
      </div>
    </div>
  )
}

export default memo(Artists)