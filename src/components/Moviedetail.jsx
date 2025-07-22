 import React from 'react'
import { asyncloadmovie, removemovie } from '../store/actions/movieAction';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from './partials/Loading';

const Moviedetail = () => {
    const {id} = useParams();
    const {info} = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(asyncloadmovie(id));
        return () => {
          dispatch(removemovie());
        };
    }, [id, dispatch]);

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
                    info.details.backdrop_path
                    })`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className='w-screen h-screen px-[10%]'
        >
          {/* part 1 Navigation */}
            <nav className='w-full h-[10vh] flex items-center gap-10 text-xl text-zinc-300'>
                <Link onClick={() => navigate(-1)}
                     className='hover:text-[#6556CD] ri-arrow-left-line'
                ></Link>
                <a target='_blank' href={info.details.homepage}>
                    <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
                </a>
                <a target='_blank' href={`https://en.wikipedia.org/wiki/${info.details.original_title || info.details.original_naem}`}>
                    <i className="ri-earth-fill hover:text-[#6556CD]"></i>
                </a>
                <a className='hover:text-[#6556CD]'
                 target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
            </nav>

            {/* Poster and  */}
            <div className='w-full '>
                 
                 <img
                     className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,0.3)] h-[40vh] items-center justify-center object-cover rounded-lg transition-shadow duration-300'
                    src={`https://image.tmdb.org/t/p/original/${
                        info.details.backdrop_path || info.details.poster_path
                      }`}
                     alt=""
                 />
                
        </div>
 
        {/* part3 available on */}
          <div className='w-[80%] '>
                
                 {/*buy*/}
                   <div className=' mt-5 flex items-center gap-4'>
                     <h1 className='text-xl text-zinc-300 font-semibold mt-5 mr-5' >Available on</h1>
                    {
                      info.watchproviders &&
                      info.watchproviders.buy &&
                      info.watchproviders.buy.map((w)=>(
                        <img
                        title= {w.provider_name}
                           className='w-[5vh] h-[5vh] object-cover rounded-lg mr-4 shadow-lg'
                           src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            
                     alt=""
                 />
                 
                      ))
                    }
                    
                  </div>

{/*rent*/}

          
                   
             </div>
        
        </div>
    ) : (
        <Loading />
    );
};

export default Moviedetail;