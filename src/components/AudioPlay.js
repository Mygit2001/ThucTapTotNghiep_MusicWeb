import { Audio } from 'react-loader-spinner';
import { memo } from 'react';

function AudioPlay() {
    return ( 
        <Audio
        height = "40"
        width = "40"
        radius = "9"
        color = 'white'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
        />
     );
}

export default memo(AudioPlay);