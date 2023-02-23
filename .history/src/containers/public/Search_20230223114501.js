import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { NavLink, useSearchParams } from "react-router-dom";
import { searchMenu } from "../../ultis/menu";
const Search = () => {
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const params = [];
    for(let entry of searchParams) {
      
    }
  })
  return (
    <div>
      <div className=" items-center py-1 pl-[60px]">
        <span className="text-[24px] font-semibold mb-5 text-lg text-red-900">Kết quả tìm kiếm</span>
        <div className="flex items-center gap-6 font-semibold mt-6 border-b text-red-600 mb-7">
          {searchMenu.map(item => (
            <NavLink 
            key={item.path} 
            to={item.path}
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
