import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/spinner";
import "../styles/Row.css";

const base_url_image = "https://image.tmdb.org/t/p/original/";
const base_url_api = "https://api.themoviedb.org/3";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    if (!isLargeRow) {
      async function fetchata() {
        const response = await axios.get(
          base_url_api + fetchUrl + "&page=" + page
        );
        setMovies([...movies, ...response.data.results]);
        setMaxPages(response.data.total_pages);
      }
      fetchata();
    } else {
      async function fetchataLarge() {
        const response = await axios.get(base_url_api + fetchUrl);
        const lista = [...response.data.results].slice(0, 10);
        setMovies([...lista]);
      }
      fetchataLarge();
    }
  }, [page]);

  return (
    <div className="row">
      <h3 className={isLargeRow && "row__title__posterLarge"}>{title}</h3>
      <div className="row__posters">
        <InfiniteScroll
          style={{
            display: "flex",
            overflow: "hidden",
            direction: "Row",
          }}
          dataLength={movies.length}
          hasMore={page <= maxPages}
          next={() => setPage((prevPage) => prevPage + 1)}
          loader={<Spinner />}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            >
              <Link to={`/pelicula/${movie.id}`}>
                <div className="d-flex align-items-center">
                  {isLargeRow && (
                    <div>
                      {" "}
                      <h1
                        className="row__numbers"
                        style={{
                          display: "inline",
                          fontSize: "450px",
                          color: "black",
                          marginRight: "-58px",
                          marginLeft: "-20px",
                          WebkitTextStroke: "5px rgb(89,89,89)",
                        }}
                      >
                        {index + 1}
                      </h1>
                    </div>
                  )}
                  <div>
                    <img
                      className="d-inline"
                      src={`${base_url_image}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      width="250px"
                      alt={movie.title || movie.name}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
        )
      </div>
    </div>
  );
}

export default Row;
