import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { apiGetArtist } from '../../apis'
const SearchAlbum = () => {
  const {searchData} = useSelector(apiGetArtist)
  return (
    <div>SearchAlbum</div>
  )
}

export default SearchAlbum