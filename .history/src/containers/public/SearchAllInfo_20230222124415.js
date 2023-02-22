import React from 'react'
import { useSelector } from 'react-redux'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col">
      <div>
        <h3>Nổi bật</h3>
      </div>
    </div>
  )
}

export default SearchAllInfo