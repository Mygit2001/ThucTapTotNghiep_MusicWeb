import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="h-[50px] mb-7 items-center text-sm border-b py-1 pl-[60px]">
        <span className="text-[24px] font-semibold mb-5">Kết quả</span>
        <div clas>
          <span>Tất cả</span>
          <span>Bài hát</span>
          <span>Album</span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
