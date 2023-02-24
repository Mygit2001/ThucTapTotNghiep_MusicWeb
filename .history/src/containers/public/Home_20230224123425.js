import React from 'react'
import { Slider, SectionBlock, Catergory} from '../../components'
import { useSelector } from 'react-redux'
const Home = () => {
    const {newEveryday, artist, top100} = useSelector(state => state.app)
    return (
        <>
            {}
        </>
    )
}

export default Home