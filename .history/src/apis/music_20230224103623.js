import axios from '../axios'

export const apiGetSong = (sid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/song',
            method: 'get',
            params: { id: sid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetailSong = (sid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/infosong',
            method: 'get',
            params: { id: sid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetaiPlaylist = (pid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: { id: pid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetailArtist = (aid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/detailartist',
            method: 'get',
            params: { id: aid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiSearch = (keyword) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/search',
            method: 'get',
            params: { keyword }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetSeacrhSong = (singerId) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/artistsong',
            method: 'get',
            params: { 
                id:singerId,
                page:2,
                count: 50
             }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})