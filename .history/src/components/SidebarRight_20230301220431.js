import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const SidebarRight = () => {
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] flex-none py-[14px] px-2 flex items-center'>
                <div className='flex justify-between'>
                    <span>Gần đây</span>
                    <span>Danh sách phát</span>
                </div>
                <span className='p-1 rounded-full text-re'><RiDeleteBin6Line size={18}/></span>
            </div>
            <div>list</div>
        </div>
    )
}

export default SidebarRight