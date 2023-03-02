import React, {memo} from 'react'
import {RotatingLines} from 'react-loader-spinner'
const LoadingSong = () => {
  return (
    <RotatingLines
  strokeColor="red"
  strokeWidth="5"
  animationDuration="0.75"
  width="30"
  visible={true}
/>
  )
}

export default memo(LoadingSong)