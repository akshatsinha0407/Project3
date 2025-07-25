 import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
 import Notfound from './Notfound';
import Loading from './Loading';

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  return ytvideo?.key ? (
    <div className='absolute z-[500] top-0 left-0 bg-[rgba(0,0,0,.9)] w-full h-screen flex items-center justify-center'>

      {/* Close button */}
      <button
        onClick={() => navigate(-1)}
        className='absolute text-white right-[18%] top-[12%] text-3xl hover:text-[#6556CD]   hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'
      >
        <i className="ri-close-fill"></i>
      </button>

      {/* YouTube video */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        controls
        width="900px"
        height="500px"
      />
    </div>
  ) : (
      <Notfound/>
  );
};

export default Trailer;
