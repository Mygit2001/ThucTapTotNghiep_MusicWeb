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
    recentSongs : []
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
        case actionTypes.SET_CUR_ALBUM_ID : 
            return {
                ...state,
                curAlbumId : action.pid || null
            }
        case actionTypes.SET_RECENT_SONG : 
          let songs = state.recentSongs
          if(action.data) {
            if(songs?.some(i => i.sid === action.data.sid)) {
               songs = songs.filter((i) => i.sid !== action.data.sid)
            }
            if(songs.length > 19) {
                songs = []
            }
            songs = [action.data, ...songs]
          }
            return {
                ...state,
                recentSongs : songs
            }
            // songs.filter((i, index, self) => index !== self.length -1)
        default:
            return state
    }
}

export default musicReducer