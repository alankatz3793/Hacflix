import StarRatingComponent from "react-star-rating-component";

function Star(props) {
  function star(value) {
    props.setStars(value - 1);
    if (props.stars !== value - 1) {
      props.setPage(1);
      props.setMoviesDB([]);
    }
  }

  return (
    <button
      style={{ backgroundColor: "#111", border: "none" }}
      className=" text-white"
      onClick={(e) => {
        star(e.target.value);
      }}
    >
      <StarRatingComponent name="rate1" emptyStarColor="#ffffff" />
    </button>
  );
}

export default Star;
