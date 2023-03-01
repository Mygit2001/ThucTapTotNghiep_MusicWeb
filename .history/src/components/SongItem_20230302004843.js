import {memo } from 'react'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
const SongItem = ({thumbnail, title, artistsName, sid, style, size}) => {
    const dispatch = useDispatch();
    return ( 
        <div 
         className = {`${style || 'w-[32%] flex border-double border-1 border-purple-400 rounded-md shadow-xl p-[10px] items-center gap-[12px]  cursor-pointer hover:bg-gray-300 '}`}
         onClick={() => {
            dispatch(actions.setCurSongId(sid));
            dispatch(actions.play(true));
         }}
         >
            <div className="flex gap-4 ">
                <img src={thumbnail} className={`${size || 'w-[60px] h-[60px] rounded-md'}`}/>
                <div className="flex flex-col font-semibold title={title}">
                    <span className='text-base text-red-900 mb-1' >{title.length > 20 ? `${title.slice(0, 20)}...` : title}</span>
                    <span className='text-xs text-red-700'>{artistsName.length > 20 ? `${artistsName.slice(0, 20)}...` : artistsName}</span>
                </div>
            </div>
        </div>
     );
}

export default memo(SongItem);