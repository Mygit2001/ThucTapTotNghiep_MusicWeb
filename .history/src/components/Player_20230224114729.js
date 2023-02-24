import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import * as actions from "../store/actions";
import { toast } from "react-toastify";
import moment from "moment";
const {
  AiOutlineHeart,
  // AiFillHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsPauseFill,
  BsFillPlayFill,
  CiShuffle,
  TbRepeatOnce,
  FiVolume2,
  FiVolumeX
} = icons;
var intervalId;
const Player = () => {
  // const audioEl = useRef(new Audio())
  const [audio, setAudio] = useState(new Audio());
  const { curSongId, isPlaying, songs } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isHoverVolume, setisHoverVolume] = useState(false);
  // const [muted, setMuted] = useState(false);
  // const finalVolume = muted ? 0 : volume ** 2;
  const thumbRef = useRef();
  const trackRef = useRef();
  const volumeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }
      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2.data.data["128"]));
      } else {
        audio.pause();
        setAudio(new Audio());
        dispatch(actions.play(false));
        setCurrentSecond(0);
        // toast.warn(res2.data.msg);
        toast.warn("Bài hát này chỉ dành cho tài khoản VIP !");
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    intervalId && clearInterval(intervalId);
    audio.pause();
    audio.load();
    if (isPlaying && thumbRef.current) {
      audio.play();
      intervalId = setInterval(() => {
        let percent =
          Math.round((audio.currentTime * 10000) / songInfo.duration) / 100;
        thumbRef.current.style.cssText = `right : ${100 - percent}%`;
        setCurrentSecond(Math.round(audio.currentTime));
      }, 100);
    }
  }, [audio]);

  useEffect(() => {
    const handleEndSong = () => {
      if (isShuffle) {
        handleShuffleSong();
      } else if (repeatMode) {
        repeatMode === 1 ? handleRepeatOneSong() : handleNextSong()
      } else {
        audio.pause();
        dispatch(actions.play(false));
      }
    };
    audio.addEventListener("ended", handleEndSong);
    return () => {
      audio.removeEventListener("ended", handleEndSong);
    };
  }, [audio, isShuffle, repeatMode]);

  useEffect(() => {
    audio.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    if(volumeRef.current) {
      volumeRef.current.style.cssText = `right:${volume}%`
    }
  }, [volume])
  //handle play button
  const handleTogglePlayMusic = async () => {
    if (isPlaying) {
      audio.pause();
      dispatch(actions.play(false));
    } else {
      audio.play();
      dispatch(actions.play(true));
    }
  };
  const handleClickProgressbar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect();
    const percent =
      Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) /
      100;
    thumbRef.current.style.cssText = `right : ${100 - percent}%`;
    audio.currentTime = (percent * songInfo.duration) / 100;
    setCurrentSecond(Math.round((percent * songInfo.duration) / 100));
  };
  //handle prev button song
  const handlePrevSong = async () => {
    if (songs) {
      let currentSongIndex;
      songs.forEach((song, index) => {
        if (song.encodeId === curSongId) currentSongIndex = index;
      });
      dispatch(actions.setCurSongId(songs[currentSongIndex - 1].encodeId));
    }
  };
  //handle next button song
  const handleNextSong = async () => {
    if (songs) {
      let currentSongIndex;
      songs.forEach((song, index) => {
        if (song.encodeId === curSongId) currentSongIndex = index;
      });
      dispatch(actions.setCurSongId(songs[currentSongIndex + 1].encodeId));
      dispatch(actions.play(true));
    }
  };

  // handle shuffle button
  const handleShuffleSong = async () => {
    const randomIndex = Math.round(Math.random() * songs.length) - 1;
    dispatch(actions.setCurSongId(songs[randomIndex].encodeId));
    dispatch(actions.play(true));
  };
  const handleRepeatOneSong = async () => {
    audio.play();
  };
  return (
    <div className="bg-emerald-300 px-5 h-full flex z-50 border-t-1 border-t-orange-400">
      <div className="w-[30%] flex-auto flex gap-3 items-center">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-full border-2 border-orange-900"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-red-700 text-sm">
            {songInfo?.title}{" "}
          </span>
          <span className=" font-semibold text-xs text-red-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} className="text-red-700" />
          </span>
          <span>
            <BsThreeDots size={16} className="text-red-700" />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto  flex items-center justify-center gap-4 flex-col py-2">
        <div className="flex gap-8 justify-center items-center">
          <span
            className={`cursor-pointer ${isShuffle && "text-red-900"}`}
            title="Bật phát ngẫu nhiên"
            onClick={() => setIsShuffle((prev) => !prev)}
          >
            <CiShuffle size={24} />
          </span>
          <span
            className={`${
              !songs ? "text-gray-500" : "cursor-pointer text-red-700"
            }`}
            onClick={handlePrevSong}
            title="Bài trước"
          >
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-1 border border-red-700 cursor-pointer hover:text-blue-500 rounded-full text-red-700 text-center"
            onClick={handleTogglePlayMusic}
          >
            {isPlaying ? (
              <BsPauseFill size={30} />
            ) : (
              <BsFillPlayFill size={30} />
            )}
          </span>
          <span
            className={`${
              !songs ? "text-gray-500" : "cursor-pointer text-red-700"
            }`}
            onClick={handleNextSong}
            title="Bài tiếp theo"
          >
            <MdSkipNext size={24} />
          </span>
          <span
            className={`cursor-pointer ${repeatMode && "text-red-900"}`}
            title="Bật phát lại tất cả"
            onClick={() => setRepeatMode(prev => prev === 2 ? 0 : prev +1) } 
          >
            {repeatMode === 1 ? <TbRepeatOnce size={24} /> : <CiRepeat size={24} />}
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-3 text-xs">
          <span className="font-semibold">
            {moment.utc(currentSecond * 1000).format("mm:ss")}
          </span>
          <div
            ref={trackRef}
            className="bg-[rgba(0,0,0,0.1)] hover:h-[6px] cursor-pointer relative m-auto h-[3px] w-4/5 rounded-l-full rounded-r-full"
            onClick={handleClickProgressbar}
          >
            <div
              ref={thumbRef}
              id="thumb-progress"
              className="bg-[#e73819] absolute top-0 left-0 bottom-0 rounded-l-full rounded-r-full"
            ></div>
          </div>
          <span className="font-semibold">
            {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
          </span>
        </div>
      </div>
      <div className="w-[30%] flex-auto text-center flex items-center justify-end">
        <div 
        onMouseEnter={() => setisHoverVolume(true)} 
        onMouseLeave={() => setisHoverVolume(false)}
        className="flex items-center gap-2"
        >
          <span onClick={() =>setVolume(prev => +prev === 0 ? 80 : 0)}>{+volume === 0 ? <FiVolumeX size={25} color="#0075ff"/> : < FiVolume2 size={25} color="#0075ff"/>}</span>
          {!isHoverVolume 
          ? <div className="w-[130px] h-1 bg-gray-200 flex-none  rounded-r-full rounded-l-full relative">
            <div ref={volumeRef} className="absolute left-0  top-0 bottom-0 bg-orange-500 rounded-r-full rounded-l-full"></div>
          </div> : 
          <input
            type="range"
            max={100}
            min={0}
            step={1}
            height={14}
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value);
            }}
            className="w-[130px]"
          />}
        </div>
        {/* <button onClick={() => setMuted((m) => !m)}>
          {muted ? "muted" : "unmuted"}
        </button> */}
      </div>
    </div>
  );
};

export default Player;
