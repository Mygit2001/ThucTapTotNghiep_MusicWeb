import React from 'react'
import { useSelector } from 'react-redux'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col">
        <h3 className='text-lg text-red-800'>Nổi bật</h3>
        <div className='flex items-center '>
          <div className='w-[30%]'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAllInfo