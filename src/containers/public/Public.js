import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight, Header, LoadingListSong } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";

const Public = () => {
    
  const {isLoadingListSong} = useSelector(state => state.app);
  const {curSongId} = useSelector(state => state.music);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)

  return (
    <div className="w-full relative h-screen flex flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none border border-blue-500">
          <SidebarLeft />
        </div>
        <div className="flex-auto flex flex-col bg-gradient-to-r from-purple-300 to-blue-200 relative">
          {isLoadingListSong && <div className="absolute top-0 bottom-0 right-0 left-0 z-20 bg-transparent-05 flex items-center justify-center">
            <LoadingListSong color = 'white'/>
          </div>}
          <div className="h-[70px] flex-none px-[59px] flex items-center mb-5">
            <Header />
          </div>
          <div className="flex-auto w-full">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowRightSidebar && <div className="w-[329px] 1600:flex flex-none border h-screen border-green-500 animate-slide-left ">
           <SidebarRight />
        </div>}
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-[90px] z-50">
        <Player setIsShowRightSidebar = {setIsShowRightSidebar}/>
      </div>
    </div>
  );
};

export default Public;
