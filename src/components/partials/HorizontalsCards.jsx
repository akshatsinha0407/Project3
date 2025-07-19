 import React from 'react'
import { Link } from 'react-router-dom';

const HorizontalsCards = ({data }) => {
    
  return (
    <div className='w-full h-[40vh] flex overflow-y-hidden mb-5 p-5'>
      {data.map((d,i)=> 
        <div key={i} className='min-w-[15%] h-full mr-5 bg-zinc-900 mb-5 rounded-lg overflow-hidden flex flex-col'>
          <img 
            className='w-full h-[60%] object-cover' 
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path || ""
            }`}
            alt=""
          />

          <div className='text-white p-3 flex-1 flex flex-col justify-between'>
            <h1 className='text-sm font-semibold leading-tight line-clamp-2 mb-2'>
              {d.name ||
                d.title ||
                d.original_name ||
                d.original_title ||
                "Untitled"}
            </h1>

            <p className='text-xs text-zinc-300 leading-relaxed line-clamp-3'>
              {(d.overview || "").slice(0, 80)}...
              <span className='text-zinc-400 hover:text-white cursor-pointer'> more</span>
            </p>
          </div>
        </div> 
      )}
    </div>
  )
}

export default HorizontalsCards