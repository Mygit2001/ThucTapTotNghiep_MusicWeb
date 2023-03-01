import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const SidebarRight = () => {
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] flex-none py-[14px] px-2 flex items-center justify-between gap-8'>
                <div className=' font-semibold flex flex-auto gap-8 justify-center bg-emerald-300 rounded-l-full rounded-r-full p-[6px]'>
                    <span className='py-[5px] flex-1'>Gần đây</span>
                    <span className='py-[5px] flex-1'>Danh sách phát</span>
                </div>
                <span className='p-2 rounded-full cursor-pointer bg-gray-50 hover:bg-blue-100 text-red-900'><RiDeleteBin6Line size={18}/></span>
            </div>
            <div>list</div>
        </div>
    )
}

export default SidebarRight