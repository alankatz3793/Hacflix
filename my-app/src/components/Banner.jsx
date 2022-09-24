import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../request";
import "../styles/Banner.css";
import { Link } from "react-router-dom";

const base_url_image = "https://image.tmdb.org/t/p/original/";
const base_url_api = "https://api.themoviedb.org/3";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchata() {
      const response = await axios.get(
        base_url_api +
          requests.fetchNetflixOriginals +
          "&page=" +
          (1 + Math.floor(Math.random() * 3))
      );
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }

    fetchata();
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    movie && (
      <Link to={`/pelicula/${movie.id}`}>
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(17,17,17, 0.2) 10%, rgba(17,17,17,0.95) 93%, rgba(17,17,17,1) 97%),url(${base_url_image}${movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents d-flex justify-content-between w-100">
            <div>
              <div className="d-flex">
                <img
                  src="https://top10.netflix.com/images/top10.png"
                  style={{ objectFit: "contain", width: "60px" }}
                  alt="logo_Top_10"
                />
                <h1 className="banner__title ms-3">
                  {movie?.title || movie?.name || movie?.original_name}
                </h1>
              </div>

              <h1 className="banner_description">
                {movie && truncateString(movie?.overview, 200)}
              </h1>
              <div className="banner__buttons">
                <button className="banner__button">▶ Play</button>
                <button
                  className="banner__button"
                  style={{
                    backgroundColor: "#636363",
                    color: "white",
                  }}
                >
                  ⓘ More information
                </button>
              </div>
            </div>
            <div
              className="text-white"
              style={{
                marginTop: "150px",
                backgroundColor: "#3A403D",
                opacity: "0.55",
                paddingTop: "5px",
                paddingLeft: "10px",
                width: "120px",
                color: "white",
              }}
            >
              <h4 className="text-white">
                {movie.genre_ids.includes(53) ||
                movie.genre_ids.includes(10749) ||
                movie.genre_ids.includes(27) ||
                movie.genre_ids.includes(80)
                  ? "+16"
                  : "+7"}
              </h4>
            </div>
          </div>
        </header>
      </Link>
    )
  );
}

export default Banner;
