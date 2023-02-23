import React, {useState} from 'react'
import icons from '../ultis/icons'
import path from '../ultis/path'
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'
import { useNavigate, createSearchParams } from 'react-router-dom'
const { FiSearch } = icons;
import { AiOutlineCloseCircle } from 'react-icons/ai'
const Search = () => {
    const [keyword, setkeyword] = useState('');
    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleSearch = async (e) => {
        if(e.keyCode === 13) {
            dispatch(actions.search(keyword));
            nav({
                pathname : `/${path.SEARCH}/${path.ALL}`,
                search : createSearchParams({
                    key: keyword
                }).toString()
            });
        }
    }
    return (
        <div className='w-full flex items-center'>
            <span className='h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500'>
                <FiSearch size={24} />
            </span>
            <input
                type="text"
                className='outline-none px-4 bg-[#DDE4E4] py-2 w-[80%] rounded-r-[20px] h-10 text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
                onChange={e => setkeyword(e.target.value)}
                onKeyUp={handleSearch}
            />
        </div>
    )
}

export default Search