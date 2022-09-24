import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Rating from "./components/Rating";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MovieDetails from "./components/MovieDetails";
import Search from "./components/Search";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pelicula/:movieId" element={<MovieDetails />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
