import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    curSongData : null,
    isPlaying: false,
    atAlbum : false,
    songs : null,
    searchData : {},
    keyword : '',
    curAlbumId : null,
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null
            }
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag
            }
        case actionTypes.SET_ALBUM :
            return {
                ...state,
                atAlbum : action.flag
            }
        case actionTypes.PLAYLIST :
            return {
                ...state,
                songs : action.songs || null
            }
        case actionTypes.SEARCH : 
            return {
                ...state,
                searchData : action.data || {},
                keyword : action.keyword || ''
            }
        case actionTypes.SET_CUR_SONG_DATA : 
            return {
                ...state,
                curSongData : action.data || null
            }
        case actionTypes.SET_CUR_SONG_DATA : 
            return {
                ...state,
                curSongData : action.data || null
            }
        default:
            return state
    }
}

export default musicReducer