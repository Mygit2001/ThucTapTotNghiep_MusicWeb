import React, { memo } from 'react'

const Artists = (thumbnail, title) => {
  return (
    <div className='w-full flex flex-col gap-[14px]'>
      <img src = {image} />
    </div>
  )
}

export default memo(Artists)