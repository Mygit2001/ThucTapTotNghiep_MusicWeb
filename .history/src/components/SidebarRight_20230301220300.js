import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const SidebarRight = () => {
    return (
        <div className='flex flex-col text-xs'>
            <div className='h-[70px] flex-none py-[14px] px-2 flex items-center'>
                <div className='flex justify-center'>
                    <span>Gần đây</span>
                    <span>Danh sách phát</span>
                </div>
                <span><RiDeleteBin6Line size={24}/></span>
            </div>
            <div>list</div>
        </div>
    )
}

export default SidebarRight