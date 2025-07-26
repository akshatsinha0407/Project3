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
 

  // Loading state - if data is still being fetched
  if (!useSelector((state) => state[category]?.info)) {
    return <Loading />;
  }

  return ytvideo?.key ? (
    <div className='absolute z-[500] top-0 left-0 bg-[rgba(0,0,0,.9)] w-full h-screen flex items-center justify-center'>

      {/* Close button */}
      <button
        onClick={() => navigate(-1)}
        className='absolute text-white right-[18%] top-[9%] text-3xl hover:text-[#6556CD] hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'
      >
        <i className="ri-close-fill"></i>
      </button>

      {/* YouTube video */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        controls
        width="900px"
        height="500px"
        playing={true}
      />
    </div>
  ) : (
    <div className='absolute z-[500] top-0 left-0 bg-[rgba(0,0,0,.9)] w-full h-screen flex items-center justify-center flex-col'>
      {/* Close button */}
      <button
        onClick={() => navigate(-1)}
        className='absolute text-white right-[18%] top-[10%] text-3xl hover:text-[#6556CD] hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'
      >
        <i className="ri-close-fill"></i>
      </button>

      {/* No trailer message */}
      <div className='text-center'>
        <div className='text-6xl text-zinc-400 mb-4'>
          <i className="ri-video-off-line"></i>
        </div>
        <h2 className='text-2xl text-white font-bold mb-2'>No Trailer Available</h2>
        <p className='text-zinc-300 mb-6'>Sorry, no trailer is available for this content.</p>
        <button
          onClick={() => navigate(-1)}
          className='bg-gradient-to-r from-[#6556CD] to-[#8B5FBF] hover:from-[#7B6BD9] hover:to-[#9D71D1] text-white font-bold py-3 px-6 rounded-xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105'
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Trailer;