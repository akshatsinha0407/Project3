 import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    const navigate = useNavigate();
     
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "Akshat | Popular "+ category.toUpperCase();

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
         
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]); // Append new results to existing ones
                setPage((prevPage) => prevPage + 1); // Increment page number for next fetch
            } 
            else {
                setHasMore(false); // No more data to fetch
            }
        }
        catch (error) {
            console.log("error: ", error);
        }
    };

    const refreshHandler = () => {
        if (popular.length === 0) {
            GetPopular();
        } else {
            setPage(1);
            setPopular([]); // Reset popular data
            GetPopular();
        }
        console.log(popular);
    };
    
    useEffect(() => {
        refreshHandler();
    }, [category]);
    
    return popular.length > 0 ? (
        <div className='w-full h-screen bg-gradient-to-br from-[#1f1e24] via-[#252229] to-[#1f1e24]'>
            <div className='px-[3%] w-full flex items-center justify-between mb-5 pt-4 relative z-50'>  
                <h1 className='text-2xl text-zinc-300 font-semibold flex items-center'>  
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-3xl hover:text-[#6556CD] text-zinc-400 cursor-pointer transition-colors duration-300 mr-3"></i>
                    <span className="bg-gradient-to-r from-[#6556CD] to-[#8b5cf6] bg-clip-text text-transparent">🔥 Popular</span>
                </h1>
                
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <div className="hover:scale-105 transition-transform duration-200 relative z-50">
                        <Dropdown
                            title="Category"
                            options={["tv", "movie"]}
                            func={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    
                    <div className='w-[2%]'></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={GetPopular}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center py-6">
                        <div className="flex items-center gap-2 text-zinc-300">
                            <div className="w-5 h-5 border-2 border-[#6556CD] border-t-transparent rounded-full animate-spin"></div>
                            <span>Loading...</span>
                        </div>
                    </div>
                }
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
};

export default Popular;