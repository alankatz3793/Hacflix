import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

function Slider() {
  const [recommendedMovies, setRecommendedMovies] = useState(null);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 6));
  const [num2, setNum2] = useState(7 + Math.floor(Math.random() * 6));
  const [num3, setNum3] = useState(14 + Math.floor(Math.random() * 6));
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=6885df3632b5e4e0342653052fb5a4d5`
      )
      .then((response) => {
        setRecommendedMovies([...response.data.results]);
      });
  }, [recommendedMovies]);
  if (recommendedMovies) {
    return (
      <div style={{ backgroundColor: "#111" }}>
        <div className="slider container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block rounded"
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  recommendedMovies[num1].backdrop_path
                }
                alt="First slide"
                style={{ width: "100%" }}
              />

              <Carousel.Caption>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://top10.netflix.com/images/top10.png"
                    width="40px"
                  />
                  <h3 className="ms-2">{recommendedMovies[num1].title}</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded"
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  recommendedMovies[num2].backdrop_path
                }
                style={{ width: "100%" }}
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://top10.netflix.com/images/top10.png"
                    width="40px"
                  />
                  <h3 className="ms-2">{recommendedMovies[num2].title}</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded"
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  recommendedMovies[num3].backdrop_path
                }
                style={{ width: "100%" }}
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://top10.netflix.com/images/top10.png"
                    width="40px"
                  />
                  <h3 className="ms-2">{recommendedMovies[num3].title}</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Slider;
