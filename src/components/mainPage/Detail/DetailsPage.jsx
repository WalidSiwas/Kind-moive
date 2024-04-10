import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Detalis.css";
import { img_300, unavailable } from "../tranding/config";
import { Link, useParams } from "react-router-dom";
import Actors from "./Actors";
import SingleContent from "../tranding/SingleContent";
import emoji from "./emoji-wink.svg";


const DetailsPage = () => {

  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [genres, setGenres] = useState([]);

  let { id, media_type } = useParams();

  const fetchDetalis = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    setMovie(data);
    setGenres(data.genres[0].id);

  };

  const fetchVideos = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setVideos(data.results[0]?.key);
  };

  const fetchSuggestions = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/${media_type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genres}`);

    setSuggestions(data.results);
  };
  

  useEffect(() => {
    fetchDetalis();
    fetchVideos();
    fetchSuggestions();
    // eslint-disable-next-line
  }, [genres, suggestions]);


  return (
    <div className="container details_div">

      <div className="row">
        <div className="col-9">
          <h1 className="text-info">
            {movie.name || movie.title} ({(movie.first_air_date || movie.release_date || ".....").substring(0, 4)})

          </h1>

          <div className="d-flex">
            <div className="flex-grow-1">
              <p className="text-secondary">{movie.tagline}</p>
            </div>
            {/* rateing */}
            <div>
              <smal className={Number(movie.vote_average) >= 6.9 ? "text-danger" : "text-primary"}>Rating {Math.round(Number(movie.vote_average) * 10) / 10} / 10</smal>
            </div>
          </div>

          <hr />
          <p className="lead">{movie.overview}</p>
          <div className="text-end">
            {movie.genres && movie.genres.map((e) => (
              <div className="badge bg-success mx-1 p-2">
                {e.name}
              </div>
            ))}
          </div>
        </div>

        <div className="col-3">
          <img className="details_img" src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable} alt={movie.name || movie.title} />
        </div>
      </div>

      {/* Actors imges and details */}
      <div className="py-3 my-5">
        <Actors id={id} media_type={media_type} />
      </div>

      {/* bottons  */}
      <div class="d-flex mb-2">
        <div class="p-2">
          <button type="button" className="btn btn-success ">Watch / Play</button>
        </div>
        <div class="p-2">
          <a href={`https://www.youtube.com/watch?v=${videos}`} target="_blank" className="btn btn-secondary">Tralier</a>
        </div>
        <div class="ms-auto p-2">
          <Link to="/"><button className="btn btn-outline-success" type="button">Back to Home page</button></Link>
        </div>
      </div>

      <hr />

      {/* Recommended */}
      <div>
        <h1>Recommend <img src={emoji}/> :</h1>
        <div className="media py-3 my-3" >
          {suggestions && suggestions.map((e) => (
            <div className="d-flex scrolls">
               <SingleContent
                key={e.id}
                id={e.id} 
                poster={e.poster_path}
                title={e.title || e.name}
                media_type={(media_type === "movie") ? "movie" : "tv"}
                date={e.release_date || e.first_air_date}
                vote_average={e.vote_average}
              /> 
            </div>
          ))}
        </div> 
      </div>

    </div>
  );
};

export default DetailsPage;