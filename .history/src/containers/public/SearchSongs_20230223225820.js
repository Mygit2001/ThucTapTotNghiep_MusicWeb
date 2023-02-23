import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { List, Lists } from "../../components";
import * as actions from "../../store/actions";
const SearchSongs = () => {
  const { searchData } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.playlistId));
  }, [searchData]);
  return (
      <Lists />
    <Scrollbars style={{ width: "100%", height: "80%" }}>
    </Scrollbars>
  );
};

export default SearchSongs;
