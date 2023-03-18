import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    newEveryday : {},
    artist : {} ,
    top100 : {},
    isLoadingListSong : false,
    catergory :{}
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null,
                newEveryday: {...action.homeData?.find(item => item.sectionId === 'hNewrelease'), title : 'Nhạc mới'} || {},
                artist: {...action.homeData?.find(item => item.sectionId === 'hArtistTheme'), title : 'Nghệ sĩ'} || {},
                catergory: {...action.homeData?.find(item => item.sectionType === 'new-release'), title : 'Thể loại'} || {},
                top100: action.homeData?.find(item => item.sectionId === 'h100') || {},
            }
        case actionTypes.LOADING :
            return {
                ...state,
                isLoadingListSong : action.flag
            }
        default:
            return state
    }
}

export default appReducer