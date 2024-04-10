import React, { useState, useEffect } from "react";
import "./Favorite.css";
import "../../mainPage/scrolls.css";
import MoviesFavoriteList from "./MoviesFavoriteList.js";
import SearchBox from "./SearchBox.js";
import AddFavorite from "./AddFavorite.js";
import RemoveFavorite from "./RemoveFavorite.js";

const FavoritePage = () => {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b7491ff`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    };
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorite = JSON.parse(localStorage.getItem("react-moive-app-favorites"));
    setFavorites(movieFavorite);
  }, [favorites]);

    const saveToLocalStorage = (items) => {
      localStorage.setItem("react-moive-app-favorites", JSON.stringify(items));
    };

  const addFavoritesMovies = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoritesMovies = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };


  return (
    <div className="container-fluid py-5 my-5">

      <div className="row d-flex justify-content-md-end py-3">
        <div>
          <h1>Add To Favorite:</h1>
        </div>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <hr />

      <div className="media">
        <MoviesFavoriteList
          movies={movies}
          handleFavoritesClick={addFavoritesMovies}
          favoriteComponent={AddFavorite}
        />
      </div>

      <div className="row d-flex justify-content-md-end py-3">
        <div>
          <h1>Favorite Movies:</h1>
        </div>
      </div>
      <div className="media">
        <MoviesFavoriteList
          movies={favorites}
          handleFavoritesClick={removeFavoritesMovies}
          favoriteComponent={RemoveFavorite}
        />
      </div>

    </div>
  );
};

export default FavoritePage;