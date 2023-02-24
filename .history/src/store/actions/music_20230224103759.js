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
            dispatch({type : actionTypes.SEARCH, data : response.data.data, keyword})
        }else {
            dispatch({type : actionTypes.SEARCH, data : null})
        }
    }catch(err) {
        dispatch({
            type : actionTypes.SEARCH,
            data: null
        })
    }
}

export const getSearchSongs = (singerId) => async (dispatch) => {
    try {
        const response = await apis.apiGetDetaiPlaylist(pid);
        if(response.data.err ===0) {
            dispatch({type : actionTypes.PLAYLIST, songs : response.data.data.song.items})
        }else {
            dispatch({type : actionTypes.PLAYLIST, songs : null})
        }
    }catch(err) {
        dispatch({
            type : actionTypes.PLAYLIST,
            data: null
        })
    }
}