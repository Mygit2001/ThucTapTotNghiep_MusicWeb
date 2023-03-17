import React, { useRef, useState } from "react";
import axios from "axios";
import { youtube_parser } from "../../components/getUrl";
const DownMp3FromYoutube = () => {
  const inputRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    const youtubeId = youtube_parser(inputRef.current.value);
    console.log(youtubeId);
    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "526bffbc66msh6dab2b008d491e7p1fa524jsne0c86e54fc87",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeId,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));
    inputRef.current.value = "";
  };
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-md w-[70%] m-auto h-[200px] flex flex-col justify-center items-center gap-4 mt-[150px]">
      <h1 className="text-[30px] font-bold text-white ">
        Tải nhạc Mp3 từ Youtube
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <input
          ref={inputRef}
          placeholder="Nhập đường dẫn youtube vào đây"
          type="text"
          className="py-2 px-3 text-sm rounded-full w-[420px] outline-none "
        />
        <button
          type="submit"
          className="w-[100px] h-[30px] rounded-full bg-[#0f593e] hover:bg-[#0e553b] text-white font-bold border-none outline-none"
        >
          Tìm
        </button>
      </form>
      {urlResult ? (
        <a
          target="_blank"
          href={urlResult}
          rel="noreferrer"
          className="text-white font-semibold underline"
        >
          Tải nhạc Mp3
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default DownMp3FromYoutube;
