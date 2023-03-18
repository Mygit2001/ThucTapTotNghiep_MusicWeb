import React, { memo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
const {TbPlaylist} = icons
const SectionBlockItem = ({ link, title, thumbnailM }) => {
  const nav = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const imageRef = useRef()
  const handleHover = (e) => {
    setIsHover(true);
    imageRef.current.classList?.add('animate-scale-image')
  };
  const handleLeaveHover = (e) => {
    setIsHover(false);
    imageRef.current.classList?.remove('animate-scale-image')
  };
  return (
    <div
      onClick={() => {
        nav(link?.split(".")[0]);
      }}
      className="flex flex-col  gap-3 flex-auto w-1/5 text-sm cursor-pointer "
    >
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        className="relative w-full"
      >       
        {isHover && (
          <div className="absolute w-full z-40 top-0 bottom-0 left-0 right-0 bg-transparent-07 rounded-full flex items-center justify-center text-white">
            <span><TbPlaylist size={28}/></span>
          </div>
        )}
        <img
          src={thumbnailM}
          alt=""
          ref={imageRef}
          className="transition ease-in-out delay-50 first-letter:w-full h-auto rounded-full "
        />
      </div>
      <span className="flex flex-col text-center">
        <span className="font-semibold text-orange-500 hover:text-orange-300" title={title}>
        {title?.length > 30 ? `${title.slice(0, 30)}...` : title}
        </span>
        {/* <span >{item.sortDescription?.length >= 40 ? `${item.sortDescription?.slice(0, 40)}...` : item.sortDescription}</span> */}
      </span>
    </div>
  );
};

export default memo(SectionBlockItem);
