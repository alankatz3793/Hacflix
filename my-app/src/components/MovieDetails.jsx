import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import Nav from "./Nav";

import "../App.css";

const base_url_image = "https://image.tmdb.org/t/p/original/";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(response.data);
    };
    getMovie();
  }, [params.movieId]);
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  if (movie) {
    return (
      <>
        <Nav />
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#111",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <div
            className="container text-white "
            style={{
              backgroundImage: `linear-gradient(rgba(50,50,50, 0.2) 10%, rgba(17,17,17,0.7) 100%),url(${base_url_image}${movie?.backdrop_path})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              maxHeight: "31rem",
              width: "65rem",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                paddingTop: "24%",
                paddingBottom: "5%",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              <h1>
                {movie?.title} ({movie?.release_date.split("-")[0]}){" "}
              </h1>
              <hr></hr>
              <div className="d-flex">
                <div className="col-6 me-4">
                  <h4>Overview </h4>
                  <h6>{truncateString(movie?.overview, 300)}</h6>
                </div>
                <div className="ms-5 w-25">
                  <div className="mb-4">
                    <h4> Rating</h4>
                    <h6> {Math.round(movie?.vote_average * 10) / 10}/10</h6>
                  </div>
                  <div>
                    <h4>Genres</h4>
                    <h6>{movie.genres.map((genre) => genre.name + ". ")}</h6>
                  </div>
                </div>
                <div className="">
                  <div className="mb-4">
                    <h4>Released</h4>
                    <h6>
                      {movie?.release_date} ·{" "}
                      {movie?.production_countries[0].iso_3166_1}
                    </h6>
                  </div>
                  <div>
                    <h4>Duration</h4>
                    <h6>{movie?.runtime} minutes</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <div
          className="d-flex justify-content-center align-items-center vh-100 text-white"
          style={{ backgroundColor: "#111" }}
        >
          <h1>L</h1>
          <BounceLoader color="white" loading size={50} />
          <h1>ading</h1>
        </div>
      </>
    );
  }
}

export default MovieDetails;
