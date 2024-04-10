import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../tranding/SingleContent";
import CustomPagination from "../tranding/CustomPagination";
import General from "./General";
import useGenres from "./hooks/useGenres";
import "./movies&series.css";

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div className="py-3 my-3">
      <div className="px-5 pt-5 mt-3">
        <h1>Movies list:</h1>
      </div>
      <div className="p-5">
        <General
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <hr/>
      
        <div className="grid py-4">
          {content && content.map((e) => (
            <div className="d-flex scrolls">
              <SingleContent
                key={e.id}
                id={e.id}
                poster={e.poster_path}
                title={e.title}
                media_type="movie"
                date={e.release_date}
                vote_average={e.vote_average}
              />
            </div>
          ))}
        </div>
        <hr />

        <div className='position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-p' >
          {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={500} />
          )}
        </div>
        
      </div>
    </div>

  );
};

export default Movies;