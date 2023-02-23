import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import { NavLink  } from "react-router-dom";
import { searchMenu } from "../../ultis/menu";
import { useSelector } from "react-redux";
const Search = () => {
  const { keyword } = useSelector(state => state.music)
  return (
    <div>
      <div className=" items-center py-1 pl-[60px]">
        <span className="text-[24px] font-semibold mb-5 text-lg text-red-900">Kết quả tìm kiếm</span>
        <div className="flex items-center gap-6 font-semibold mt-6 border-b text-red-600 mb-7">
          {searchMenu.map(item => ( 
            <NavLink 
            key={item.path} 
            to={`${item.path}?q=${}`}
            className={({isActive}) => isActive ? 'text-purple-700 p-4': 'text-red-600 p-4'}
            >
               {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
