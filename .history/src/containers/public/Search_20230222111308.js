import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="flex h-[50px] mb-7 items-center text-sm border-b py-1 pl-[60px]">
        <span className="text-[24px] font">Kết quả</span>
        <span>Tất cả</span>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
