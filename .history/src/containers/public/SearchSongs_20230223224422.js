import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {List, Lists} from '../../components';
import * as actions from '../../store/actions'
const SearchSongs = () => {
  const {searchData } = useSelector(state => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getS)
  }, [searchData])
  return (
    <div>SearchSongs</div>
  )
}

export default SearchSongs