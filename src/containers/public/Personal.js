import React from "react";
import { SongItem, List } from "../../components";
import { useSelector } from "react-redux";
const Personal = () => {
  const { searchData } = useSelector((state) => state.music);
  return (
    <div className="w-full flex flex-col px-[60px] pb-[30px] gap-[40px]">
        <div className="flex flex-col mt-6">
          <h3 className="text-lg font-semibold text-red-600 mb-4">Nhạc VIP</h3>
          <div className="flex justify-between flex-wrap w-full">
            {searchData?.songs?.map((item) => (
              <div
                key={item.encodeId}
                className="flex-auto w-[40%] p-2 border-top-width-medium border-double border-1 border-purple-400
                rounded-md shadow-xl  items-start items-center gap-[12px]
                hover:bg-gray-300 cursor-pointer"
              >
                <List songData={item} isHideNameAlbum />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Personal;
