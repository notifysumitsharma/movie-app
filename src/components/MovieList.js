import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div
            className="image-container d-flex justify-content-start m-3"
            key={index}
          >
            <img src={movie.Poster} alt="movie"></img>
            <div className="overlay d-flex align-items-center justify-content-center">
              Add To Favourites
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
