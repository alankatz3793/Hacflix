import "../App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "../request";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        style={{ backgroundColor: "#111", width: "100%", overflow: "hidden" }}
      >
        <Nav />
        <Banner />
        <Row
          title="Las 10 peliculas mas populares en Uruguay hoy"
          fetchUrl={requests.fetchTrending}
          isLargeRow
        />
        <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default Home;
