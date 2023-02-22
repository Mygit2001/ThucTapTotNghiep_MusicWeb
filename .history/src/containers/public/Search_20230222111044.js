import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="flex h-[50px] mb-7 items-center text-sm ">
        <span className="text">Kết quả</span>
        <span>Tất cả</span>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
