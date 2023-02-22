import React from 'react'
import { useSelector } from 'react-redux'
import {  SongItem } from '../../components'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col px-[60px] pb-[30px]">
      <div className="flex flex-col">
        <h3 className='text-lg text-red-800 mb-3'>Nổi bật</h3>
        <div className='flex gap-8'>
            {searchData?.top && 
             <div 
               className='p-[10px] flex items-center gap-6 bg-neutral-300 flex-1 rounded-md flex-1 cursor-pointer'
                
             >
              <img src={searchData.top.thumbnail} className='w-[80px] h-[80px] object-cover rounded-full'/>
              <div className='flex flex-col'>
                <span className='text-xs text-gray-600 mb-2'>{searchData.top.objectType === 'artist' ? 'Nghệ sĩ' : 'Bài hát'}</span>
                <span className='text-sm text-red-900 font-semibold'>{searchData.top.title || searchData.top.name}</span>
              </div>
             </div>
            }
            {searchData?.songs?.filter((item, index) => [...Array(2).keys()].some(i => i === index))?.map(item => (
               <div key={item.encodeId} className="flex-1"> 
                 <SongItem 
                 thumbnail={item.thumbnail}
                 sid = {item.encodeId}
                 title = {item.title}
                 artistsName={item.artistsNames}
                 size = 'w-[80px] h-[80px]'
                 />
               </div>
            ))}
        </div>
      </div>
      <div className="flex">

      </div>
    </div>
  )
}

export default SearchAllInfo