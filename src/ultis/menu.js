import icons from "./icons"

const {FcVip, MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie, MdDownloading, MdOutlinePersonalInjury,RiCompassDiscoverFill, RiVipLine } = icons
export const sidebarMenu = [
    {
        path: 'personal',
        text: 'Nhạc VIP',
        icons: <RiVipLine size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: < MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'download-mp3-frYoutube',
        text: 'Tải nhạc từ Youtube',
        end: true,
        icons: <MdDownloading size={35} />
    },
    {
        path: 'artist',
        text: 'Nghệ sĩ',
        icons: <MdOutlinePersonalInjury size={24} />
    },
    {
        path: 'account',
        text: 'Gói VIP',
        icons: <FcVip size={24} />
    },
    // {
    //     path: 'follow',
    //     text: 'Theo dõi',
    //     icons: <MdOutlineFeed size={24} />
    // },
]
export const searchMenu = [
    {
        path: 'tat-ca',
        text: 'Tất cả'
    },
    {
        path: 'bai-hat',
        text: 'Bài hát'
    },
    {
        path: 'playlist',
        text: 'Album'
    }
]
export const login = {
    path: 'login',
}