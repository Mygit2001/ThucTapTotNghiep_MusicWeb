import React, { useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useSelector } from 'react-redux'
import {SongItem} from './'
const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false)
    const {curSongData} = useSelector(state => state.music) 
    console.log(curSongData);
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] w-full flex-none py-[14px] px-2 flex items-center justify-between gap-6'>
                <div className=' font-semibold flex flex-auto justify-center bg-emerald-400 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer'>
                    <span 
                    className={`py-[5px] flex-1 ${!isRecent && 'bg-[#f97316]'} flex items-center justify-center rounded-r-full rounded-l-full`}
                    onClick={() => setIsRecent(prev => !prev)}
                    >
                        Danh sách phát
                    </span>
                    <span 
                    className={`py-[5px] flex-1 ${isRecent && 'bg-[#f97316]'} flex items-center justify-center rounded-r-full rounded-l-full`}
                    onClick={() => setIsRecent(prev => !prev)}
                    >
                        Gần đây
                    </span>
                </div>
                <span className='p-2 rounded-full cursor-pointer bg-gray-50 hover:bg-blue-100 text-red-900'><RiDeleteBin6Line size={18}/></span>
            </div>
            <div className='flex flex-col px-2'>
                <SongItem 
                  thumbnail={curSongData.thumbnail}
                  title = {curSongData.title}
                  artistsName = {curSongData.artistsNames}
                  sid = {curSongData.encodeId}
                  style = 'w-full   flex item-center shadow-xl p-[10px] gap-[12px] bg-gradient-to-r from-purple-200 to-blue-200 cursor-pointer hover:bg-gray-300 '
                  size ='w-[50px] h-[50px] rounded-md'
                />
                <div className = 'flex flex-col text-black pt-[15px] '>
                    <span className = 'text-sm font-semibold'>Tiếp theo</span>
                    <span className = 'text-xs'>Từ playlist</span>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight