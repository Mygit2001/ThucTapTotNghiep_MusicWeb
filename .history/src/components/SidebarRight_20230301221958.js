import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const SidebarRight = () => {
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] flex-none py-[14px] px-2 flex items-center justify-between gap-8'>
                <div className='flex flex-auto gap-8 justify-center bg-green-500 rounded-l-full rounded-r-'>
                    <span className=''>Gần đây</span>
                    <span className=''>Danh sách phát</span>
                </div>
                <span className='p-2 rounded-full cursor-pointer bg-gray-50 hover:bg-blue-100 text-red-900'><RiDeleteBin6Line size={18}/></span>
            </div>
            <div>list</div>
        </div>
    )
}

export default SidebarRight