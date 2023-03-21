import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {SectionBlockItem} from './'
const SectionBlock = ({ data }) => {
  const nav = useNavigate();
  
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 mb-24">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] text-gray-100 font-bold">{data.title}</h3>
        <span className="text-md font-semibold text-orange-300 cursor-pointer hover:text-blue-200">
          Tất cả
        </span>
      </div>
      <div className="flex items-start justify-between gap-[28px]">
        {data &&
          data?.items?.length > 0 &&
          data.items
            .filter((item, index) => index <= 4)
            ?.map((item) => (
              <SectionBlockItem 
              key={item.encodeId}
              title={item.title}
              link={item.link}
              thumbnailM={item.thumbnailM}
               />
            ))}
      </div>
    </div>
  );
};
export default memo(SectionBlock);
