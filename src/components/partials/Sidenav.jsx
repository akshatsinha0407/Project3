 import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3'>
   
      <h1 className='text-2xl text-white font-bold'>
        <i className="ri-reactjs-fill text-[#6556CD] mr-3"></i>
        <span>Akshat Sinha</span>
      </h1>

   
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
          New Feeds
        </h1>
        <Link 
        to="/trending" 
        className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-fire-fill pr-2"></i>
          Trending
        </Link>
        <Link
         to="/popular" 
        
        className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-sparkling-2-fill pr-2"></i>
          Popular
        </Link>
        <Link 
        to="/movie"
        className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-movie-2-ai-line pr-2"></i>
          Movies
        </Link>
        <Link to="/tv"
         className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-tv-line pr-2"></i>
          TV Show's
        </Link>
        <Link to="/celebs"
        className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-user-star-fill pr-2"></i>
          Celebs
        </Link>
      </nav>

       
      <hr className='border-transparent h-[1px] bg-zinc-400' />

       
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
          Website Info.
        </h1>
        <Link to="/about"
         className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-information-fill pr-2"></i>
          About
        </Link>
        <Link to="/contact" className='hover:bg-[#6556CD] duration-300 p-5 rounded hover:text-white'>
          <i className="ri-contacts-fill pr-2"></i>
          Contact Us
        </Link>
      </nav>
   
    </div>
  )
}

export default Sidenav
