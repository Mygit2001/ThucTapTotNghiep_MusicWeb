import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { SongItem } from "./";
import { apiGetDetaiPlaylist } from "../apis";
import { Scrollbars } from "react-custom-scrollbars-2";
const SidebarRight = () => {
  const [isRecent, setIsRecent] = useState(false);
  const [playlist, setPlaylist] = useState();
  const { curSongData, curSongId, curAlbumId, isPlaying, recentSongs } = useSelector(
    (state) => state.music
  );

  const fecthDetailPlaylist = async () => {
    const res = await apiGetDetaiPlaylist(curAlbumId);
    // console.log(res);
    if (res.data?.err === 0) setPlaylist(res.data.data?.song?.items);
  };
  useEffect(() => {
    curAlbumId && fecthDetailPlaylist();
  }, []);
  useEffect(() => {
    if (curAlbumId && isPlaying) fecthDetailPlaylist();
  }, [curAlbumId, isPlaying]);

  console.log(recentSongs);

 useEffect(() => {
   isPlaying && setIsRecent(false)
 }, [isPlaying, curSongId])
  return (
    <div className="flex flex-col text-xs w-full h-full">
      <div className="h-[70px] w-full flex-none py-[14px] px-2 flex items-center justify-between gap-6">
        <div className=" font-semibold flex flex-auto justify-center bg-emerald-400 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer">
          <span
            className={`py-[5px] flex-1 ${
              !isRecent && "bg-[#f97316]"
            } flex items-center justify-center rounded-r-full rounded-l-full`}
            onClick={() => setIsRecent((prev) => !prev)}
          >
            Danh sách phát
          </span>
          <span
            className={`py-[5px] flex-1 ${
              isRecent && "bg-[#f97316]"
            } flex items-center justify-center rounded-r-full rounded-l-full`}
            onClick={() => setIsRecent((prev) => !prev)}
          >
            Gần đây
          </span>
        </div>
        <span className="p-2 rounded-full cursor-pointer bg-gray-50 hover:bg-blue-100 text-red-900">
          <RiDeleteBin6Line size={18} />
        </span>
      </div>
      {isRecent ? (
        <div className="flex flex-col flex-auto px-2">
          <Scrollbars autoHide style={{ width: "100%", height: "80%" }}>
            {recentSongs.map((item) => (
              <SongItem
                key={item.sid}
                thumbnail={item.thumbnail}
                title={item.title}
                artistsName={item.artistsName}
                sid={item.sid}
                style="w-full mb-1 shadow-xl rounded-md bg-purple-900 flex item-center shadow-xl p-[10px] gap-[12px] hover:bg-purple-800 cursor-pointer "
                size="w-[50px] h-[50px] rounded-md"
              />
            ))}
          </Scrollbars>
        </div>
      ) : (
        <div className="flex flex-col flex-auto px-2">
          <Scrollbars autoHide style={{ width: "100%", height: "80%" }}>
            <SongItem
              thumbnail={curSongData.thumbnail}
              title={curSongData.title}
              artistsName={curSongData.artistsNames}
              sid={curSongData.encodeId}
              style="w-full  bg-purple-900 rounded-md flex item-center shadow-xl p-[10px] gap-[12px] hover:bg-purple-800 cursor-pointer "
              size="w-[50px] h-[50px] rounded-md"
            />
            <div className="flex flex-col text-black pt-[15px] px-2 pb-[5px]">
              <span className="text-xs text-orange-300">
                <span>Từ album : </span>
                <span className="font-semibold text-orange-200">
                  {curSongData?.album?.title.length > 25
                    ? `${curSongData?.album?.title.slice(0, 25)}...`
                    : curSongData?.album?.title}
                </span>
              </span>
              <span className="text-sm font-semibold text-orange-300">Tiếp theo</span>
            </div>
            {playlist && (
              <div className="flex flex-col">
                {playlist.map((item) => (
                  <SongItem
                    key={item.encodeId}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    artistsName={item.artistsNames}
                    sid={item.encodeId}
                    style="w-full bg-purple-900 rounded-md mb-1 flex item-center shadow-xl p-[10px] gap-[12px] hover:bg-purple-800 cursor-pointer "
                    size="w-[50px] h-[50px] rounded-md"
                  />
                ))}
              </div>
            )}
          </Scrollbars>
        </div>
      )}
    </div>
  );
};

export default SidebarRight;
