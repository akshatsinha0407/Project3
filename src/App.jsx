import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import Celebs from "./components/Celebs";
import About from "./components/About";
import Contact from "./components/Contact";
import Moviedetail from "./components/Moviedetail";
import Celebdetail from "./components/Celebdetail";
import Trailer from "./components/partials/Trailer";
import Tvdetail from "./components/Tvdetail";
import Notfound from "./components/partials/Notfound";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />

        <Route path="/movie/details/:id" element={<Moviedetail/>} > 
         <Route path="/movie/details/:id/trailer"
          element={<Trailer/>} />
        </Route>

        <Route path="/tv" element={<Tvshows />} />

        <Route path="/tv/details/:id" element={<Tvdetail/>} >
         <Route path="/tv/details/:id/trailer"
          element={<Trailer/>} />
         </Route>

        <Route path="/celebs" element={<Celebs />} />
        <Route path="/person/details/:id" element={<Celebdetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound/>} ></Route>
      </Routes>
    </div>
  );
};

export default App;
