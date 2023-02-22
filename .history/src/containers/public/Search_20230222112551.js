import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="h-[50px] mb-7 items-center py-1 pl-[60px]">
        <span className="text-[24px] font-semibold mb-5 text-lg text-red-900">Kết quả tìm kiếm</span>
        <div className="flex items-center gap-6 font-semibold mt-6 border-b text-red-600">
          <span className="pr-4 py-3 hover:text-pu">Tất cả</span>
          <span className="px-4 py-3 hover:text-pu">Bài hát</span>
          <span className="px-4 py-3 hover:text-pu">Album</span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
