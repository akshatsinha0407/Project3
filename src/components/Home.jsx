 import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalsCards from './partials/HorizontalsCards';
import Dropdown from './partials/Dropdown';

const Home = () => {
  document.title = "Akshat Sinha";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all"); // 🔧 FIXED HERE

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
        <Topnav />
        <Header data={wallpaper} />





        <div className=' p-5 flex justify-between'>
          <h1 className='text-2xl text-zinc-400 font-semibold '>Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]} func ={(e)=> setCategory(e.target.value)}// 🔧 Added this
            onChange={setCategory} // 🔧 Added this
          />
        </div>







        <HorizontalsCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading..</h1>
  );
};

export default Home;
