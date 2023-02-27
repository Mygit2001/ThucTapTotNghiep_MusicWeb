import React , {memo } from 'react'

 const InputForm = ({label}) => {
  return (
    <div>
      <label htmlFor='phone' className='mb-2'>{label}</label>
      <input type='text' id='phone' className='outline-none bg-blue-50 p-2 rounded-sm w-full'/>
    </div>
  )
}
export default memo(InputForm)

