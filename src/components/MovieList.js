import React from "react";

const MovieList = (props) => {
  let FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div
            className="image-container d-flex justify-content-start m-3"
            key={index}
          >
            <img src={movie.Poster} alt="movie"></img>
            <div
              className="overlay d-flex align-items-center justify-content-center"
              onClick={() => props.handleFavouritesClick(movie)}
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
