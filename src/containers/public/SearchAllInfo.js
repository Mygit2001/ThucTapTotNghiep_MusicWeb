import React from "react";
import { useSelector } from "react-redux";
import { SongItem, List, Artists , LoadingListSong} from "../../components";
import { useNavigate } from "react-router-dom";
const SearchAllInfo = () => {
  const nav = useNavigate();
  const { searchData , songs} = useSelector((state) => state.music);
  
  console.log(searchData)
  return (
    <>
    {!(searchData?.songs) ? <div className="absolute top-0 bottom-0 right-0 left-0 z-20 bg-transparent-05 flex items-center justify-center"><LoadingListSong /></div> :
    <div className="w-full flex flex-col px-[60px] pb-[30px] gap-[40px]">
    <div className="flex flex-col mt-6">
      <h3 className="text-lg font-semibold text-orange-600 mb-3">Nổi bật</h3>
      <div className="flex gap-8">
        {searchData?.top && (
          <div className="p-[10px] flex items-center gap-6 bg-neutral-300 flex-1 rounded-md cursor-pointer">
            <img
              src={searchData.top.thumbnail}
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xs text-gray-600 mb-2">
                {searchData.top.objectType === "artist"
                  ? "Nghệ sĩ"
                  : "Bài hát"}
              </span>
              <span className="text-sm text-red-900 font-semibold">
                {searchData.top.title || searchData.top.name}
              </span>
            </div>
          </div>
        )}
        {searchData?.songs
          ?.filter((item, index) =>
            [...Array(2).keys()].some((i) => i === index)
          )
          ?.map((item) => (
            <div key={item.encodeId} className="flex-1">
              <SongItem
                thumbnail={item.thumbnail}
                sid={item.encodeId}
                title={item.title}
                artistsName={item.artistsNames}
                size="w-[80px] h-[80px]"
                style= 'w-full flex  rounded-md shadow-xl p-[10px] items-center gap-[12px]  cursor-pointer hover:bg-purple-800'
              />
            </div>
          ))}
      </div>
    </div>
    <div className="flex flex-col mt-6">
      <h3 className="text-lg font-semibold text-red-600 mb-4">Bài hát nổi bật</h3>
      <div className="flex justify-between flex-wrap w-full">
        {searchData?.songs?.map((item) => (
          <div
            key={item.encodeId}
            className="flex-auto w-[40%] p-2 border-top-width-medium border-1 
            rounded-md shadow-xl  items-start items-center gap-[12px]
             cursor-pointer"
          >
            <List songData={item} isHideNameAlbum />
          </div>
        ))}
      </div>
    </div>
    {/* <div className="flex flex-col mt-6">
      <h3 className="text-lg font-semibold text-red-600 mb-4">Bài hát nổi bật</h3>
        <div className="flex justify-between flex-wrap w-full">
          {searchData?.playlists?.map(item => (
             <SectionBlockItem />
          ))}
        </div>
    </div> */}
    <div className="flex flex-col mt-6 mb-20">
      <h3 className="text-lg font-semibold text-red-600 mb-4">Nghệ sĩ</h3>
      <div className="flex gap-[28px]">
        {searchData?.artists?.filter((i, index) => index <= 4)?.map(item => (
            <Artists 
            key={item.id}
            thumbnail = {item.thumbnailM}
            title = {item.name}
            link = {item.link}
            />
        ))}
      </div>
    </div>
  </div> 
  }
    </>
  );
};

export default SearchAllInfo;
