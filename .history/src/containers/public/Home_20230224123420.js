import React from 'react'
import { Slider, SectionBlock, Catergory} from '../../components'
import { useSelector } from 'react-redux'
const Home = () => {
    const {newEveryday, artist, top100} = useSelector(state => state.app)
    return (
        <>
            <div className='overflow-y-auto w-full '>
                <Slider />
                {newEveryday && <SectionBlock data={newEveryday} className="w-[120px]"/>}
                {artist &&  <SectionBlock data = {artist} />}
                <Catergory />
                {top100 && <SectionBlock data={top100} className="" />}
            </div>
        </>
    )
}

export default Home