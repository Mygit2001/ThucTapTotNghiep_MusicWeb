import React, {useState} from 'react'
import icons from '../ultis/icons'
import { apiSearch } from '../apis'

const { FiSearch } = icons

const Search = () => {

    const [keyword, setkeyword] = useState('');
    const handleSearch = async (e) => {
        if(e.keyCode === 13) {
        //    const res = await apiSearch(keyword)
        //    console.log(res);
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