import React from "react";
import { useSelector } from "react-redux";
import { SongItem, List, Artists } from "../../components";
import { useNavigate } from "react-router-dom";
const SearchAllInfo = () => {
  const nav = useNavigate();
  const { searchData } = useSelector((state) => state.music);

  return (
    {searchData 
    }
  );
};

export default SearchAllInfo;
