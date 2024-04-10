import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "./SingleContent";
import CustomPagination from "./CustomPagination";
import TredingIcon from "./fire.svg";

const Trending = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrading = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrading();
    // eslint-disable-next-line
  }, [page]);


  return (
    <div className="py-3 my-3">
      <div className="p-5">
        <div className="pb-3">
          <h1>Trending <img src={TredingIcon} /> :</h1>
        </div>
        <hr />
        <div className="media py-4" >
          {content && content.map((e) => (
            <div className="d-flex scrolls">
              <SingleContent
                key={e.id}
                id={e.id}
                poster={e.poster_path}
                title={e.title}
                media_type={e.media_type}
                date={e.release_date}
                vote_average={e.vote_average}
              />
            </div>
          ))}
        </div>
        <hr />
        <div className='position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-p' >
          <CustomPagination setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Trending;