  import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const Topnav = () => {


  const [query, setQuery] = useState("");

  const GetSerches = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${query}`);
      console.log(d);
    } catch (error) {
      console.log("error: ", error);
    }
  };


  useEffect(() => {
    GetSerches();
  }, [query]); // run whenever query changes




  return (
    <div className='w-full h-[10vh] relative flex justify-start ml-[160px] items-center'>
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className='w-[50%] mx-10 border-none outline-none text-xl text-zinc-400 p-5'
        type='text'
        placeholder="Search anything"
      />
      {query.length > 0 &&
        <i
          onClick={() => setQuery("")}
          className="ri-close-circle-line text-3xl text-zinc-400 cursor-pointer"
        ></i>
      }

      {/* Suggestion */}
      <div className='absolute w-[50%] max-h-[50vh] overflow-auto bg-zinc-200 top-[90%] left-[160px]'>
        {/* 
        <Link className='hover:text-black hover:bg-zinc-300 duration-300 inline-block text-zinc-600 w-[100%] p-8 font-semibold justify-start border-b-2 border-zinc-100 items-center'>
          <img src="" alt="" />
          <span>Hloo jiii</span>
        </Link>
        */}
      </div>
    </div>
  );
};

export default Topnav;
