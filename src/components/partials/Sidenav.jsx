 import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 overflow-auto border-zinc-400 p-4'>
   
      <h1 className='text-2xl text-white font-bold mb-8'>
        <i className="ri-reactjs-fill text-[#6556CD] mr-3"></i>
        <span>Akshat Sinha</span>
      </h1>

   
      <nav className='flex flex-col text-zinc-400 text-lg'>
        <h1 className='text-white font-semibold text-xl mb-4'>
          New Feeds
        </h1>
        <Link 
        to="/trending" 
        className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-fire-fill mr-3"></i>
          Trending
        </Link>
        <Link
         to="/popular" 
        className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-sparkling-2-fill mr-3"></i>
          Popular
        </Link>
        <Link 
        to="/movie"
        className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-movie-2-ai-line mr-3"></i>
          Movies
        </Link>
        <Link to="/tv"
         className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-tv-line mr-3"></i>
          TV Show's
        </Link>
        <Link to="/celebs"
        className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-user-star-fill mr-3"></i>
          Celebs
        </Link>
      </nav>

       
      <hr className='border-transparent h-[1px] bg-zinc-400 my-6' />

       
      <nav className='flex flex-col text-zinc-400 text-lg'>
        <h1 className='text-white font-semibold text-xl mb-4'>
          Website Info.
        </h1>
        <Link to="/about"
         className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-information-fill mr-3"></i>
          About
        </Link>
        <Link to="/contact" 
        className='hover:bg-[#6556CD] duration-300 py-3 px-4 rounded hover:text-white mb-1 flex items-center'>
          <i className="ri-contacts-fill mr-3"></i>
          Contact Us
        </Link>
      </nav>
   
    </div>
  )
}

export default Sidenav