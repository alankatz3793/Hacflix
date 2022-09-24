import axios from "axios";
import "../App.css";
import Stars from "./star";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function Rating() {
  const [moviesDB, setMoviesDB] = useState([]);
  const [page, setPage] = useState(1);
  const [stars, setStars] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(stars * 2);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&page=${page}&vote_average.gte=${stars * 2}`
      )
      .then((response) => {
        setMoviesDB([...moviesDB, ...response.data.results]);
        setMaxPages(response.data.total_pages);
      });
  }, [page, stars]);

  return (
    <div className=" w-100">
      <div className="body_class " style={{ backgroundColor: "#111" }}>
        <Nav />
        <div
          style={{
            paddingTop: "80px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            width: "100% ",
          }}
        >
          <h4>Filter movies by rating</h4>
        </div>

        <div
          className="container d-flex flex-column align-items-center px-4"
          style={{ backgroundColor: "#111" }}
        >
          <h3 className="d-inline">
            <Stars
              setPage={setPage}
              setStars={setStars}
              setMoviesDB={setMoviesDB}
              stars={stars}
            />
          </h3>
          <InfiniteScroll
            dataLength={moviesDB.length}
            hasMore={page <= maxPages}
            next={() => setPage((prevPage) => prevPage + 1)}
          >
            <div className="row mt-1" style={{ backgroundColor: "#111" }}>
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
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        width="100%"
                        alt=""
                      />
                    </Link>
                  </button>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Rating;
