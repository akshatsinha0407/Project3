import React from 'react'
import { Link } from 'react-router-dom';

const HorizontalsCards = ({data }) => {
    
  return (
 
   

      <div className='w-[100%]  h-[40vh]  flex overflow-y-hidden  mb-5 p-5 '>
         {data.map((d,i)=> 
         <div key={i} className='min-w-[15%] h-full mr-5 bg-zinc-900 mb-5'>

            <img 
            className='w-full h-[45%] object-cover' 
            src={`https://image.tmdb.org/t/p/original/${
          d.backdrop_path || d.poster_path || ""
        }`}
         alt=""
          />

          <div className=' text-white p-3'>

               <h1 className='w-[70%] text-xl mt-3 font-semibold'>
        {d.name ||
          d.title ||
          d.original_name ||
          d.original_title ||
          "Untitled"}
      </h1>
      <p className='w-[70%]  '>
        {(d.overview || "").slice(0, 50)}...
        <span className='text-zinc-300'>more</span>
      </p>


          </div>
          
   
       
        
         </div> 
         )}
      </div>
    
  )
}

export default HorizontalsCards
