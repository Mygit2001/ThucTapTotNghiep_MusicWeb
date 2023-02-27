import React from 'react'
import icons from '../ultis/icons'
import { login } from '../ultis/menu'
import { NavLink } from 'react-router-dom'
import { Search } from './'

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
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
            <NavLink to>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[100px]'>Login</button>
            </NavLink>

        </div>
    )
}

export default Header