import React, {memo} from 'react'
import { useNavigate } from 'react-router-dom'

const SectionBlock = ({data}) => {
    const nav = useNavigate()   
    return (
        <div className="mt-12 px-[59px] flex flex-col gap-5 mb-24">
            <div className="flex items-center justify-between">
                <h3 className="text-[20px] text-gray-100 font-bold">{data.title}</h3>
                <span className="text-md font-semibold text-blue-500 cursor-pointer hover:text-blue-200">Tất cả</span>
            </div>
            <div className="flex items-center justify-between gap-[28px]">
                {data && data?.items?.length > 0 && data.items.filter((item, index) => index <=4)?.map(item => (
                    <div 
                    key={item.encodeId}
                    onClick={() => {
                        nav(item?.link?.split('.')[0])
                    }}
                    className='flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer'
                    >
                        <img src={item.thumbnailM} alt="" className='w-full h-auto rounded-full'/>
                        <span className='flex flex-col text-center'>
                            <span className='font-semibold text-orange-500' >{item.title}</span>
                            {/* <span >{item.sortDescription?.length >= 40 ? `${item.sortDescription?.slice(0, 40)}...` : item.sortDescription}</span> */}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default memo(SectionBlock)