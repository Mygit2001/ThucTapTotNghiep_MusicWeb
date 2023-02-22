import React from 'react'
import { useSelector } from 'react-redux'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music)
  return (
    <div>SearchAllInfo</div>
  )
}

export default SearchAllInfo