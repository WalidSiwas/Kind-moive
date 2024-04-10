import React from "react";
import { Link } from "react-router-dom";

const MoviesFavoriteList = (props) => {

    const url = "/DetailsPage/";
    const unavailable_img = "https://www.movienewz.com/img/films/poster-holder.jpg";
    const FavoriteComponent = props.favoriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-3 scrolls">

                    <li>
                        <Link to={url + `movie/${movie.imdbID}`}><img src={movie.Poster ? movie.Poster : unavailable_img} /></Link>
                        <h2>{movie.Title}</h2>
                    </li>

                    <div
                        onClick={() => props.handleFavoritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center">
                        <FavoriteComponent />
                    </div>

                    {/* {(() => {
                        if (movie.imdbID !== "tt2975590") {
                            return <div
                                onClick={() => props.handleFavoritesClick(movie)}
                                className="overlay d-flex align-items-center justify-content-center">
                                <FavoriteComponent />
                            </div>;
                        } 
                    })()} */}

                </div>
            ))}
        </>
    );
};


export default MoviesFavoriteList;