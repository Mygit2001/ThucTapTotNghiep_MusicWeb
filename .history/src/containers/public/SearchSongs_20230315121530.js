import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { List, Lists } from "../../components";
import { Player, SidebarLeft, SidebarRight, Header,  } from "../../components";
import * as actions from "../../store/actions";
const SearchSongs = () => {
  const { searchData } = useSelector((state) => state.music);
  const {isLoadingListSong} = useSelector(state => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.id));
  }, [searchData]);
  return (
      <div className="px-[60px] "><Lists /></div>
  );
};

export default SearchSongs;
