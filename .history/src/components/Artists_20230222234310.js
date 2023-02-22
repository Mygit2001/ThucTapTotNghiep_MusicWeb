import React, { memo } from 'react'

const Artists = ({thumbnail, title}) => {
  return (
    <div className='w-full flex flex-col gap-[14px]'>
      <img src ={thumbnail} className='rounded-md  w-full object-content'/>
      <div className='flex fc items-center'>
        <span className='font-semibold text-[16px] text-center text-red-900'>{title}</span>
        <button 
          type='button' 
          className=' bg-blue-500 text-center rounded-[50px] py-1 text-gray-100 flex items-center justify-center gap-1'>
          Theo dõi
        </button>
      </div>
    </div>
  )
}

export default memo(Artists)