import icons from "./icons"

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie, MdOutlineAlbum, MdOutlinePersonalInjury,RiCompassDiscoverFill, FcBusinessman } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <FcBusinessman size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: < MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'album/:title/:pid',
        text: 'Album',
        end: true,
        icons: <MdOutlineAlbum size={24} />
    },
    {
        path: 'artistSpotlight/:items/:pid',
        text: 'Nghệ sĩ',
        icons: <MdOutlinePersonalInjury size={24} />
    },
    // {
    //     path: 'follow',
    //     text: 'Theo dõi',
    //     icons: <MdOutlineFeed size={24} />
    // },
]
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <FcBusinessman size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: < MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'album/:title/:pid',
        text: 'Album',
        end: true,
        icons: <MdOutlineAlbum size={24} />
    },
    {
        path: 'artistSpotlight/:items/:pid',
        text: 'Nghệ sĩ',
        icons: <MdOutlinePersonalInjury size={24} />
    },
    // {
    //     path: 'follow',
    //     text: 'Theo dõi',
    //     icons: <MdOutlineFeed size={24} />
    // },
]