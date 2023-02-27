import React , {memo } from 'react'

 const InputForm = ({label}) => {
  return (
    <div>
      <label htmlFor='phone'>{label}</label>
      <input type='text' id='phone' className='outline-none bg-blue- p-2 rounded-md w-full'/>
    </div>
  )
}
export default memo(InputForm)

