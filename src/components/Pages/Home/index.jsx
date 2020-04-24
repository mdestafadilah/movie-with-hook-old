import React from "react";
// import API from "../../API/request";
import Slide from "../../Listing";

const Home = (props) => {
  return (
    <div>
      <h1>React Movie</h1>
      <h2>Popular Movie</h2>
      <Slide type="LIST" query="POPULAR_MOVIES" slide />
      <h2>Popular series</h2>
      <Slide type="LIST" query="POPULAR_SERIES" slide />
      <h2>Family</h2>
      <Slide type="LIST" query="FAMILY" slide />
      <h2>Documentary</h2>
      <Slide type="LIST" query="DOCUMENTARY" slide />
    </div>
  );
};

export default Home;
