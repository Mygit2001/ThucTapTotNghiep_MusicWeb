import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import { Lists, AudioPlay } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultis/icons";
const {BsFillPlayFill} = icons;
const Album = () => {
  const { pid } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  const {  isPlaying } = useSelector((state) => state.music);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setCurAlbumId(pid))
    const fetchDetailPlaylist = async () => {
      dispatch(actions.loadingList(true));
      const response = await apis.apiGetDetaiPlaylist(pid);
      dispatch(actions.loadingList(false));
      if (response?.data.err === 0) {
        setPlaylistData(response.data?.data);
        dispatch(actions.setPlaylist(response.data?.data?.song?.items));
      }
    };

    fetchDetailPlaylist();
  }, [pid]);

  return (
    <div className="flex gap-8 relative w-full h-full px-[59px]">
      
      <div className="flex-none w-1/4  flex flex-col items-center gap-2">
        <div className="w-full relative">
          <img
            src={playlistData?.thumbnailM}
            alt="thumbnail"
            className={`w-full object-contain ${
              isPlaying ? 'animate-rotate-song' : 'animate-rotate-song-pause'
            } rounded-full shadow-md `}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 hover:bg-transparent hover:transition-all text-white rounded-full flex items-center justify-center">
            <span className="p-3 border border-white rounded-full">
                {isPlaying ? <AudioPlay /> : <BsFillPlayFill size={45}/>}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[20px] font-bold text-gray-800">
          {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </h3>
          <span className="flex gap-2 items-center text-gray-500 text-xs">
            <span>Cập nhật:</span>
            <span>
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </span>
          <span className="flex gap-2 items-center text-gray-500 text-xs">
            {playlistData?.artistsNames}
          </span>
          <span className="flex gap-2 items-center text-gray-500 text-xs">{`${Math.round(
            playlistData?.like / 1000
          )}K người yêu thích`}</span>
        </div>
      </div>
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
    </div>
  );
};

export default Album;
