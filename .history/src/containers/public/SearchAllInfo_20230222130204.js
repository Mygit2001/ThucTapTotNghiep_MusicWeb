import React from 'react'
import { useSelector } from 'react-redux'
const SearchAllInfo = () => {
  const {searchData} = useSelector(state => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col px-[60px] py-[30px]">
      <div className="flex flex-col">
        <h3 className='text-lg text-red-800'>Nổi bật</h3>
        <div >
            {searchData?.top && 
             <div className='p-[10px] flex items-center gap-4 ng'>
              <img src={searchData.top.thumbnail} className='w-[80px] h-[80px] object-cover rounded-full'/>
              <div className='flex flex-col'>
                <span className='text-xs text-red-500 mb-2'>{searchData.top.objectType === 'artist' ? 'Nghệ sĩ' : ''}</span>
                <span className='text-sm text-red-900 font-semibold'>{searchData.top.title || searchData.top.name}</span>
              </div>
             </div>
            }
        </div>
      </div>
    </div>
  )
}

export default SearchAllInfo