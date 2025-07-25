 import React from 'react';
import { asyncloadceleb, removeceleb } from '../store/actions/celebAction';
import { useParams, Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from './partials/Loading';
import HorizontalCards from './partials/HorizontalsCards';

const Celebdetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.celeb);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadceleb(id));
    return () => {
      dispatch(removeceleb());
    };
  }, [id, dispatch]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${info.details.profile_path ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}` : ''})`,
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
        {info.externalid?.instagram_id && (
          <a target='_blank' href={`https://instagram.com/${info.externalid.instagram_id}`} className='hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'>
            <i className="ri-instagram-fill hover:text-[#6556CD] text-xl"></i>
          </a>
        )}
        {info.externalid?.twitter_id && (
          <a target='_blank' href={`https://twitter.com/${info.externalid.twitter_id}`} className='hover:scale-110 transition-all duration-300 p-2 hover:bg-white/10 rounded-full'>
            <i className="ri-twitter-fill hover:text-[#6556CD] text-xl"></i>
          </a>
        )}
        {info.externalid?.imdb_id && (
          <a className='hover:text-[#6556CD] font-semibold hover:scale-105 transition-all duration-300 px-3 py-2 hover:bg-white/10 rounded-lg'
            target='_blank' href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}>IMDb</a>
        )}
      </nav>

      {/* Profile + Content */}
      <div className='w-full flex mt-3'>
        <img
          className='shadow-xl hover:shadow-[8px_17px_50px_8px_rgba(101,86,205,0.4)] h-[40vh] object-cover rounded-xl transition-all duration-500 hover:scale-105 border border-white/20'
          src={info.details.profile_path ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}` : '/api/placeholder/300/450'}
          alt=""
        />

        <div className='content ml-[5%]'>
          <h1 className='text-5xl font-black text-zinc-100 drop-shadow-2xl'>
            {info.details.name}
            <small className='text-lg text-zinc-300 font-normal ml-3 drop-shadow-lg'>
              ({info.details.birthday ? new Date(info.details.birthday).getFullYear() : 'N/A'})
            </small>
          </h1>

          <div className='flex text-zinc-100 items-center gap-4 mt-3 drop-shadow-lg text-sm'>
            <span className='text-black flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 w-[6vh] h-[6vh] rounded-full text-sm font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110'>
              {info.details.popularity ? info.details.popularity.toFixed() : '0'}
            </span>
            <h1 className='font-medium'>Popularity</h1>
            <span className='text-zinc-400'>•</span>
            <h1 className='text-zinc-200 font-medium'>{info.details.known_for_department}</h1>
            <span className='text-zinc-400'>•</span>
            <h1 className='text-zinc-200 font-medium'>{info.details.place_of_birth}</h1>
          </div>

          <h1 className='text-xl mt-5 text-zinc-100 font-bold drop-shadow-lg'>Biography</h1>
          <p className='text-zinc-200 text-sm leading-relaxed drop-shadow-md'>
            {info.details.biography ? info.details.biography.substring(0, 300) + '...' : 'No biography available'}
          </p>

          {info.details.also_known_as && info.details.also_known_as.length > 0 && (
            <>
              <h1 className='text-xl mt-5 text-zinc-100 font-bold drop-shadow-lg'>Also Known As</h1>
              <p className='text-zinc-200 text-sm leading-relaxed drop-shadow-md'>
                {info.details.also_known_as.slice(0, 3).join(", ")}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Known For Section */}
      <hr className='border-zinc-600 mt-6 mb-6 shadow-lg' />
      <div className='mb-8'>
        <h1 className='text-2xl text-zinc-100 font-bold mb-4 drop-shadow-lg'>Known For</h1>
        <HorizontalCards
          data={info.combinedCredits?.cast ? info.combinedCredits.cast.slice(0, 10) : []}
        />
      </div>

      {/* Movie Credits */}
      {info.movieCredits?.cast && info.movieCredits.cast.length > 0 && (
        <div className='mb-8'>
          <h1 className='text-2xl text-zinc-100 font-bold mb-4 drop-shadow-lg'>Movies</h1>
          <HorizontalCards data={info.movieCredits.cast.slice(0, 10)} />
        </div>
      )}

      {/* TV Credits */}
      {info.tvCredits?.cast && info.tvCredits.cast.length > 0 && (
        <div className='mb-8'>
          <h1 className='text-2xl text-zinc-100 font-bold mb-4 drop-shadow-lg'>TV Shows</h1>
          <HorizontalCards data={info.tvCredits.cast.slice(0, 10)} />
          <Outlet/>
        </div>
      )}

    </div>
  ) : (
    <Loading />
  );
};

export default Celebdetail;