import React, { useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const SidebarRight = () => {
    const [isRecent, setidRecent] = useState(false)
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] w-full flex-none py-[14px] px-2 flex items-center justify-between gap-8'>
                <div className=' font-semibold flex flex-auto justify-center bg-emerald-300 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer'>
                    <span className={``}>Gần đây</span>
                    <span className='py-[5px] flex-1 first-letter:flex items-center justify-center rounded-r-full rounded-l-full'>Danh sách phát</span>
                </div>
                <span className='p-2 rounded-full cursor-pointer bg-gray-50 hover:bg-blue-100 text-red-900'><RiDeleteBin6Line size={18}/></span>
            </div>
            <div>list</div>
        </div>
    )
}

export default SidebarRight