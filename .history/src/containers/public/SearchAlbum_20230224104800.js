import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { apiGetArtist } from '../../apis'
const SearchAlbum = () => {
  const {searchData} = useSelector(state => state.music);
  useEffect(() => {
    const fetch = asyn
  },[])
  return (
    <div>SearchAlbum</div>
  )
}

export default SearchAlbum