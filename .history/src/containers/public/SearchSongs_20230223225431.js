import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Scrollbars} from 'React'
import {List, Lists} from '../../components';
import * as actions from '../../store/actions'
const SearchSongs = () => {
  const {searchData } = useSelector(state => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData.top.playlistId));
  }, [searchData])
  return (
    <Scrollbars style={{ width: "100%", height: "80%" }}>
        <div className="flex-auto mb-40">
          <span className="text-base my-4 text-sky-900">
            <span className="text-gray-600">Lời tựa : </span>
            <span>{playlistData?.sortDescription}</span>
          </span>
          <Lists
            songs={playlistData?.song?.items}
            totalDuration={playlistData?.song?.totalDuration}
          />
        </div>
      </Scrollbars>
  )
}

export default SearchSongs