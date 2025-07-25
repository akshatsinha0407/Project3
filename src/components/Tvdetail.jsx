 import React from 'react'
import { asyncloadtv, removetv } from '../store/actions/tvAction';
import { useParams, Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from './partials/Loading';
import HorizontalCards from './partials/HorizontalsCards'

const tvdetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className='w-screen relative h-screen overflow-y-auto px-[8%]'
    >

      {/* Navigation */}
      <nav className='w-full h-[7vh] flex items-center gap-6 text-base text-zinc-300 bg-black/20 rounded-md shadow px-4 mt-3 mb-3'>
        <Link onClick={() => navigate(-1)}
          className='hover:text-[#6556CD] ri-arrow-left-line text-xl hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'
        ></Link>
        <a target='_blank' href={info.details.homepage} className='hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'>
          <i className="ri-external-link-fill hover:text-[#6556CD] text-xl"></i>
        </a>
        <a target='_blank' href={`https://en.wikipedia.org/wiki/${info.details.original_title || info.details.original_naem}`} className='hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'>
          <i className="ri-earth-fill hover:text-[#6556CD] text-xl"></i>
        </a>
        <a className='hover:text-[#6556CD] font-semibold hover:scale-105 transition-all duration-300 px-3 py-2 hover:bg-white/10 rounded-lg'
          target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMDb</a>
      </nav>

      {/* Poster + Content */}
      <div className='w-full flex mt-3'>
        <img
          className='shadow-xl hover:shadow-[8px_17px_50px_8px_rgba(101,86,205,0.4)] h-[40vh] object-cover rounded-xl transition-all duration-500 hover:scale-105 border border-white/20'
          src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.poster_path}`}
          alt=""
        />

        <div className='content ml-[5%]'>
          <h1 className='text-5xl font-black text-zinc-100 drop-shadow-2xl'>
            {info.details.original_title || info.details.original_name || info.details.title || info.details.name}
            <small className='text-lg text-zinc-300 font-normal ml-3 drop-shadow-lg'>
              ({info.details.release_date ? info.details.release_date.split('-')[0] : info.details.first_air_date ? info.details.first_air_date.split('-')[0] : 'N/A'})
            </small>
          </h1>

          <div className='flex text-zinc-100 items-center gap-4 mt-3 drop-shadow-lg text-sm'>
            <span className='text-black flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 w-[6vh] h-[6vh] rounded-full text-sm font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110'>
              {(info.details.vote_average * 10).toFixed()}<sup className='text-xs'>%</sup>
            </span>
            <h1 className='font-medium'>User Score</h1>
            <span className='text-zinc-400'>•</span>
            <h1 className='text-zinc-200 font-medium'>{info.details.first_air_date}</h1>
            <span className='text-zinc-400'>•</span>
            <h1 className='text-zinc-200 font-medium'>
              {info.details.genres.map((g) => g.name).join(", ")}
            </h1>
            <span className='text-zinc-400'>•</span>
        
          </div>

          <h1 className='text-xl font-semibold italic text-blue-200 mt-3 drop-shadow-lg'>
            "{info.details.tagline}"
          </h1>

          <h1 className='text-xl mt-3 text-zinc-100 font-bold drop-shadow-lg'>Overview</h1>
          <p className='text-zinc-200 text-sm leading-relaxed drop-shadow-md'>{info.details.overview}</p>

          <h1 className='text-xl mt-5 text-zinc-100 font-bold drop-shadow-lg'>Available  In</h1>
          <p className='text-zinc-200 text-sm leading-relaxed drop-shadow-md'>{info.translations.join(", ")}</p>

          <div className='flex gap-4 mt-4'>
            <Link className='bg-gradient-to-r from-[#6556CD] to-[#8B5FBF] hover:from-[#7B6BD9] hover:to-[#9D71D1] text-white font-bold py-3 px-6 rounded-xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2' to={`${pathname}/trailer`}>
              <i className="ri-play-fill text-xl"></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* "Available On" section placed just below content */}
      <div className='w-full mt-5'>
        {/* Available to Rent */}
        {info.watchproviders && info.watchproviders.buy && (
          <div className='flex items-center gap-4 flex-wrap mb-4'>
            <h1 className='text-xl text-zinc-100 font-bold mr-4 drop-shadow-lg mb-2'>Available to Rent</h1>
            {info.watchproviders.buy.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                  className='w-[6vh] h-[6vh] object-cover rounded-lg mr-3 shadow hover:shadow-xl hover:!shadow-[#6556CD] transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/20'
             
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {/* Available to Stream (Flatrate) */}
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className='flex items-center gap-4 flex-wrap'>
            <h1 className='text-xl text-zinc-100 font-bold mr-4 drop-shadow-lg mb-2'>Available to Stream</h1>
            {info.watchproviders.flatrate.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className='w-[6vh] h-[6vh] object-cover rounded-lg mr-3 shadow hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/20'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Recommended or Similar Section */}
      <hr className='border-zinc-600 mt-6 mb-6 shadow-lg' />
      <div className='mb-8'>
        <h1 className='text-2xl text-zinc-100 font-bold mb-4 drop-shadow-lg'>
          {info.recommendations.length > 0 ? 'Recommended for You' : 'Similar tvs'}
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          } />
          <Outlet/>
      </div>

    </div>
  ) : (
    <Loading />
  );
};

export default tvdetail;