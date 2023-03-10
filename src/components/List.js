import React, { memo } from "react";
// import icons from '../ultis/icons'
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

// const { BsMusicNoteBeamed } = icons

const List = ({ songData, isHideNameAlbum}) => {
  const dispatch = useDispatch();

  // console.log(songData);
  return (
    <div
      className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-purple-800 cursor-pointer"
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId));
        dispatch(actions.play(true));
        dispatch(actions.playAlbum(true));
        dispatch(actions.setRecentSong({thumbnail : songData?.thumbnail, title : songData?.title, sid : songData?.encodeId, artistsName : songData?.artistsNames}))

      }}
    >
      <div className="flex items-center gap-3 flex-1">
        {/* <span><BsMusicNoteBeamed /></span> */}
        <img
          src={songData?.thumbnail}
          alt="thumbnailM"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col w-full">
          <span className="text-sm font-semibold text-orange-300 mb-1">
            {songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 30)}...`
              : songData?.title}
          </span>
          <span className="text-orange-200 text-xs">{songData?.artistsNames}</span>
        </div>
      </div>
      {!isHideNameAlbum && 
          <div className="flex-1 flex items-center justify-center text-orange-300">
            {songData?.album?.title?.length > 30
              ? `${songData?.album?.title?.slice(0, 30)}...`
              : songData?.album?.title}
          </div>
      }
      <div className="flex-1 flex justify-end text-orange-300 text-xs opacity-70">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(List);
