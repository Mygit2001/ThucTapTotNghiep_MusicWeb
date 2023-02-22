import React from 'react'
import { useSelector } from 'react-redux'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col">
      <div className="flex h-[50px] mb-7 ic">

      </div>
    </div>
  )
}

export default SearchAllInfo