import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { SongItem } from "./";
const Catergory = () => {
  const { catergory } = useSelector(state => state.app);

  const [isActive, setisActive,] = useState(0);
  const [cateSongs, setcateSongs] = useState([]);
  useEffect(() => {
    if(isActive === 0) 
        setcateSongs(catergory?.items?.vPop)
    else
        setcateSongs(catergory?.items.others)
        
  }, [isActive, catergory])
  return (
    <div className="mt-12 px-[59px] mb-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[20px] text-gray-100 font-bold">{catergory?.title}</h3>
        <span className="text-md font-semibold text-orange-300 cursor-pointer hover:text-blue-900">Tất cả</span>
      </div>
      <div className="flex items-center gap-4 text-md font-semibold mb-5">
        <button
          type="button"
          className= {`py-1 px-4 rounded-l-full text-orange-300 cursor-pointer rounded-r-full border border-purple-500 ${isActive ===0 && 'bg-gray-200 text-'}`}
          onClick={() => setisActive(0)}
          >
          Việt Nam
        </button>
        <button
          type="button"
          className={`py-1 px-4 rounded-l-full cursor-pointer text-orange-300 rounded-r-full border border-purple-500 ${isActive ===1 && 'bg-gray-200 text-'}`}
          onClick={() => setisActive(1)}
          >
          Quốc Tế
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {cateSongs?.map(item => (
          <SongItem 
          key={item.encodeId}
          thumbnail={item.thumbnail}
          title={item.title}
          artistsName={item.artistsNames}
          />    
        )
        )}
      </div>
    </div>
  );
};

export default Catergory;
