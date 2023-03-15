import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { List, Lists, LoadingListSong } from "../../components";
import * as actions from "../../store/actions";
const SearchSongs = () => {
  const { searchData } = useSelector((state) => state.music);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.id));
  }, [searchData]);
  
  return (
      <>
       {!searchData ? <div className="px-[60px] "><Lists /></div> : <div><LoadingListSong</div>}
      </>
  );
};

export default SearchSongs;
