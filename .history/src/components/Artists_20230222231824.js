import React, { memo } from 'react'

const Artists = (thumbnail, title) => {
  return (
    <div className='w-full flex flex-col gap-[14px]'>
      <img src = {image} className='rounded-md  h-[250px] w-[250px] object-cover'/>
    </div>
  )
}

export default memo(Artists)