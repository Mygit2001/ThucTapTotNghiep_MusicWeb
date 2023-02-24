import React from 'react'
import { Slider, SectionBlock, Catergory} from '../../components'
import { useSelector } from 'react-redux';
import {LoadingListSong} from '../../components'
const Home = () => {
    const {newEveryday, artist, top100} = useSelector(state => state.app)
    return (
        <>
            {
            (newEveryday && artist && top100) 
            ?
            <div className='overflow-y-auto w-full '>
                <Slider />
                <SectionBlock data={newEveryday} className="w-[120px]"/>
               <SectionBlock data = {artist} />
                <Catergory />
              <SectionBlock data={top100} className="" />
            </div> 
            : <div className='w-full h-full flex items-center'><LoadingListSong /></div>
            }
        </>
    )
}

export default Home