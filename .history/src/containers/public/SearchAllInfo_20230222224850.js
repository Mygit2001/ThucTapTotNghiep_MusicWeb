import React from "react";
import { useSelector } from "react-redux";
import { SongItem, List, SectionBlock } from "../../components";
import { useNavigate } from "react-router-dom";
const SearchAllInfo = (searchData) => {
  const nav = useNavigate();
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col px-[60px] pb-[30px] gap-[40px]">
      <div className="flex flex-col mt-6">
        <h3 className="text-lg font-semibold text-red-600 mb-3">Nổi bật</h3>
        <div className="flex gap-8">
          {searchData?.top && (
            <div className="p-[10px] flex items-center gap-6 bg-neutral-300 flex-1 rounded-md flex-1 cursor-pointer">
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
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Bài hát nổi bật</h3>
          <div className="flex justify-between flex-wrap w-full">
            {searchData?.songs?.map(item => (
              <div key={item.encodeId} className="flex-auto w-[40%] p-2 border-top-width-medium border-double border-1 border-purple-400
              rounded-md shadow-xl p-[10px] items-start items-center gap-[12px]
              hover:bg-gray-300 cursor-pointer">
                <List songData={item} isHideNameAlbum/>
              </div>
            ))}
          </div>
      </div>
      <div className="flex flex-col mt-6">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Bài hát nổi bật</h3>
          <div className="flex justify-between flex-wrap w-full">
            {searchData?.playlists?.map(item => (
              <div className="flex items-center justify-between gap-[28px]">
              {searchData && searchData?.playlists?.length > 0 && searchData.items.filter((item, index) => index <=4)?.map(item => (
                  <div 
                  key={item.encodeId}
                  onClick={() => {
                      nav(item?.link?.split('.')[0])
                  }}
                  className='flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer'
                  >
                      <img src={item.thumbnailM} alt="" className='w-full h-auto rounded-full'/>
                      <span className='flex flex-col text-center'>
                          <span className='font-semibold' >{item.title}</span>
                          {/* <span >{item.sortDescription?.length >= 40 ? `${item.sortDescription?.slice(0, 40)}...` : item.sortDescription}</span> */}
                      </span>
                  </div>
              ))}
          </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default SearchAllInfo;
