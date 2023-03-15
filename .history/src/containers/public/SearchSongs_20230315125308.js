import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { List, Lists, LoadingListSong } from "../../components";
import * as actions from "../../store/actions";
const SearchSongs = () => {
  const { searchData, songs } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.id));
  }, [searchData]);
  
  return (
      <div >
       {!(searchData) ? <div className="absolute top-0 bottom-0 right-0 left-0 z-20 bg-transparent-05 flex items-center justify-center"><LoadingListSong /></div> : 
       <div className="px-[60px] relative"><Lists /></div> 
       }
      </div>
  );
};

export default SearchSongs;
