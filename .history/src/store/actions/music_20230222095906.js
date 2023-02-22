import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})
export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})
export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag
})

export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs
})

export const loadingList = (flag) => ({
    type: actionTypes.LOADING,
    flag
})
export const search = (keyword) => async (dispatch) => {
    try {
        const response = await apis.apiSearch(keyword);
        if(response.data.err ===0) {
            dispatch({type : actionTypes.SEARCH})
        }
    }catch(err) {
        dispatch({
            type : actionTypes.SEARCH,
            
        })
    }
}