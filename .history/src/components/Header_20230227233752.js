import React from 'react'
import icons from '../ultis/icons'
import path from '../ultis/path'
import { Search } from './'
import { useNavigate } from 'react-router-dom'
const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex gap-6 text-gray-400'>
                    <span><HiArrowNarrowLeft size={24} /></span>
                    <span><HiArrowNarrowRight size={24} /></span>
                </div>
                <div className='w-1/2'>
                    <Search />
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button onClick={() => navigate(path.LOGIN)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[100px]'>Đăng nhập</button>
                <button onClick={() => navigate(path.LOGIN)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[100px]'>Đăng kí</button>
            </div>

        </div>
    )
}

export default Header