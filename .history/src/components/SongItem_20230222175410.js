import {memo } from 'react'

const SongItem = ({thumbnail, title, artistsName, sid, style, sm}) => {
    return ( 
        <div className="flex-auto flex w-[30%] border-double border-1 border-purple-400
         rounded-md shadow-xl p-[10px] items-start items-center gap-[12px]
         hover:bg-gray-300 cursor-pointer
         "
         >
            <img src={thumbnail} className={`${sm ? 'w-[40px] h-[40px]' : 'w-[60px] h-[60px] object-cover rounded-full'}`}/>
            <div className="flex flex-col font-semibold">
                <span className='text-base text-red-900 mb-1'>{title}</span>
                <span className='text-xs text-red-700'>{artistsName}</span>
            </div>
        </div>
     );
}

export default memo(SongItem);