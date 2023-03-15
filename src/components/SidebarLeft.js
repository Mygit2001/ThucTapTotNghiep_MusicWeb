import React from 'react'
import logo from '../assets/logo.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import path from '../ultis/path'

const notActiveStyle = 'py-3 px-[25px] font-bold text-[#32323D] text-[13px] flex gap-[12px] items-center  my-1 bg-orange-400'
const activeStyle = 'py-3 px-[25px] font-bold text-[#0F7070] text-[13px] flex gap-[12px] items-center  my-1 bg-orange-500'

const SidebarLeft = () => {

    const navigate = useNavigate()
    return (
        <div className='flex h-full flex-col bg-gradient-to-r from-purple-300 to-pink-200'>
            <div onClick={() => navigate(path.HOME)} className='w-full mb-5 mt-3 h-[70px] py-[15px] px-[25px] flex justify-center items-center cursor-pointer'>
                <img src="https://static.vecteezy.com/system/resources/previews/009/992/680/original/3d-music-icon-png.png" alt="logo" className='w-[180px] h-[100px]' />
            </div>
            <div className='flex flex-col'>
                {sidebarMenu.map(item => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) => isActive ? activeStyle : notActiveStyle } 
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SidebarLeft