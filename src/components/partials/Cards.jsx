import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({data, title}) => {
   
  return (
    <div className='flex flex-wrap items-center justify-center gap-[5%] bg-[#1f1e24] w-full h-full'>
        {data.map((c, i) => (
            <Link to={`/${c.media_type || title}/details/${c.id}`}
                className='relative w-[28vh] mb-[5%] hover:scale-105 transition-transform duration-300' 
                key={i}
            >
                <img 
                    className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] hover:shadow-[8px_17px_38px_2px_rgba(101,86,205,0.3)] h-[40vh] items-center justify-center object-cover rounded-lg transition-shadow duration-300'
                    src={`https://image.tmdb.org/t/p/original/${
                        c.backdrop_path || c.poster_path ||c.profile_path
                    }`} 
                    alt="" 
                />
               
                <h1 className='text-2xl text-zinc-400 hover:text-[#6556CD] font-semibold mt-3 transition-colors duration-300'>
                    {c.name || c.title || c.orignal_name || c.orignal_title} 
                </h1>
                 {c.vote_average &&  <div className='text-white justify-center  right-[-10%]  bottom-[20%]  flex items-center   bg-yellow-500 w-[5vh] h-[5vh] rounded-full absolute   text-xl font-semibold'>
                    {(c.vote_average*10).toFixed()} <sup>%</sup></div> }
              
            </Link>
        ))}
    </div>
  )
}

export default Cards