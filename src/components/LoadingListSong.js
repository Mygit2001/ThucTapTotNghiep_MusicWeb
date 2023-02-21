import { CirclesWithBar } from "react-loader-spinner";
import {memo} from 'react'
function LoadingListSong() {
  return (
    <CirclesWithBar
  height="60"
  width="60"
  color="#00ffff"
  wrapperStyle={{}}
  visible={true}
  ariaLabel='circles-with-bar-loading'
/>
  );
}

export default memo(LoadingListSong);
