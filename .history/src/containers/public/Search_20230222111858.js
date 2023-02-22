import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="h-[50px] mb-7 items-center py-1 pl-[60px]">
        <span className="text-[24px] font-semibold mb-5">Kết quả</span>
        <div className="flex items-center gap-6 font-semibold mt-6 border-b">
          <span className="px-4 ">Tất cả</span>
          <span className="px-4 py-3">Bài hát</span>
          <span className="px-4 py-3">Album</span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
