import React from 'react'

const DownMp3FromYoutube = () => {
  return (
    <div className=' bg-purple-300 rounded-md w-[70%] m-auto h-[200px] flex flex-col items-center'>
      <h1>Tải nhạc Mp3 từ Youtube</h1>
      <form className='flex flex-col'>
        <input placeholder='Nhập đường dẫn youtube vào đây' type='text' className='p-1'/>
        <button type='submit'>Tìm</button>
      </form>
    </div>
  )
}

export default DownMp3FromYoutube