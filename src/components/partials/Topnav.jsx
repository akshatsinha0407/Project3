 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import noimage from '/noimage.webp'

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSerches = async () => {
    try {
      const {data}= await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      console.log(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className='w-[89%] h-[10vh] relative flex justify-start ml-[160px] items-center'>
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className='w-[50%] mx-10 border-none outline-none text-xl text-zinc-400 p-5 bg-transparent'
        type='text'
        placeholder="Search anything"
      />
      {query.length > 0 &&
        <i
          onClick={() => setQuery("")}
          className="ri-close-circle-line text-3xl text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
        ></i>
      }

      {query.length > 0 && (
        <div className='absolute w-[50%] max-h-[50vh] overflow-auto bg-zinc-800 rounded-lg shadow-2xl top-[90%] left-[100px] border border-zinc-600'>
          {searches.map((s,i)=>(
            <Link key={i} className='hover:text-white flex hover:bg-zinc-700 duration-300 text-zinc-300 w-full p-6 font-semibold justify-start border-b border-zinc-700 items-center'>
              <img
                className='w-[8vh] h-[8vh] object-cover rounded-lg mr-4 shadow-lg'
                src={
                  s.backdrop_path || s.profile_path ?
                  `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                  : noimage
                }
                alt="" 
              />
              <span className='truncate'>{s.original_title || s.name || s.original_name || s.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;