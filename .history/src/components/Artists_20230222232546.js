import React, { memo } from 'react'

const Artists = ({thumbnail, title}) => {
  return (
    <div className='w-full flex flex-col gap-[14px]'>
      <img src ={thumbnail} className='rounded-md  h-[200px] w-[250px] object-cover'/>
      <span className='font-semibold'>{title}</span>
    </div>
  )
}

export default memo(Artists)