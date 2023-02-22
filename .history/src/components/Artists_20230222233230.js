import React, { memo } from 'react'

const Artists = ({thumbnail, title}) => {
  return (
    <div className='w-full flex flex-col gap-[14px]'>
      <img src ={thumbnail} className='rounded-md  h-[250px] w-[250px] object-cover'/>
      <span className='font-semibold text-sm text-center'>{title}</span>
      <button type='button' className='bg-blue-500'>
        Theo dõi
      </button>
    </div>
  )
}

export default memo(Artists)