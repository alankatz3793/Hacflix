import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader ";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function Loader() {
  return <div className="sweet-loading"></div>;
}

export default Loader;
