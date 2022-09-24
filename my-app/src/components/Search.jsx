import React from "react";
import Nav from "./Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "../App.css";

function Search() {
  const [search, setSearch] = React.useState("");
  const [moviesDB, setMoviesDB] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (search && search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=${page}`
        )
        .then((response) => {
          setMoviesDB([...moviesDB, ...response.data.results]);
          setMaxPages(response.data.total_pages);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&vote_average.gte=8`
        )
        .then((response) => {
          setMoviesDB([...moviesDB, ...response.data.results]);
          setMaxPages(response.data.total_pages);
        });
    }
  }, [search, page]);

  return (
    <>
      <div
        className="search"
        style={{
          backgroundColor: "#111",
          width: "100%",
          paddingTop: "30px",
        }}
      >
        <Nav />
        <form
          className="form-group d-flex flex-column align-items-center"
          action=""
          onClick={(ev) => {
            ev.preventDefault();
          }}
        >
          <div className="d-flex flex-column">
            <div className="d-flex flex-column pt-5">
              <label
                htmlFor="search"
                className="d-flex mb-1 justify-content-center text-white"
              >
                <h4>Filter movies by title</h4>
              </label>
              <div className="d-flex">
                <p
                  action=""
                  className="d-inline"
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "large",
                    marginRight: "-28px",
                    marginTop: "6px",
                    cursor: "pointer",
                    height: "30px",
                    zIndex: 10,
                  }}
                >
                  🔍
                </p>
                <input
                  type="text"
                  name="search"
                  placeholder="Search by title"
                  style={{
                    paddingLeft: "30px",
                    width: "350px",
                    border: "none",
                    outline: "none",
                    display: "inline",
                    height: "40px",
                    borderRadius: "20px",
                  }}
                  onChange={(ev) => {
                    setSearch(ev.target.value);
                    setMoviesDB([]);
                    setPage(1);
                    setMaxPages(1);
                  }}
                  value={search}
                />
              </div>
            </div>
          </div>
        </form>
        <InfiniteScroll
          dataLength={moviesDB.length}
          hasMore={page <= maxPages}
          next={() => setPage((prevPage) => prevPage + 1)}
        >
          <div className="container mt-4 " style={{ backgroundColor: "#111" }}>
            {moviesDB.map((movie, i) => {
              return (
                <button
                  key={i}
                  className="col-3 mb-4 "
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#111",
                  }}
                >
                  <Link to={`/pelicula/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      width="100%"
                      alt=""
                    />
                  </Link>
                </button>
              );
            })}
          </div>
        </InfiniteScroll>
        {moviesDB && (
          <div
            style={{
              height: "100vh",
              color: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h3>No se han encontrado resultados</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
