 import React from 'react'
 import Home from "./components/Home"
import {Route,Routes} from "react-router-dom"
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows';
 import Celebs from './components/Celebs';
 import About from './components/About';
 import Contact from './components/Contact';


 const App = () => {
   return (
     <div className="w-screen h-screen bg-[#1F1E24] flex" >
       <Routes>
       <Route path='/' element={<Home/>}  />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tvshows' element={<Tvshows/>} />
        <Route path='/celebs' element={<Celebs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
     </div>
   )
 }
 
 export default App
 