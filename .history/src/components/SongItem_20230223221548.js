import {memo } from 'react'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
const SongItem = ({thumbnail, title, artistsName, sid, style, size}) => {
    const dispatch = useDispatch();
    return ( 
        <div 
         className = {` ${style ||  'hover:bg-gray-300 '}`}
         onClick={() => {
            dispatch(actions.setCurSongId(sid));
            dispatch(actions.play(true));
         }}
         >
            <div className="flex gap-4 ">
                <img src={thumbnail} className={`${size || 'w-[60px] h-[60px]'}`}/>
                <div className="flex flex-col font-semibold">
                    <span className='text-base text-red-900 mb-1'>{title}</span>
                    <span className='text-xs text-red-700'>{artistsName}</span>
                </div>
            </div>
        </div>
     );
}

export default memo(SongItem);