import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import "./Actors.css";
import { useParams } from 'react-router-dom';
import { img_300, unavailable } from '../tranding/config';

const handleDragStart = (e) => e.preventDefault();


const Actors = () => {
    const [credits, setCredits] = useState();

    let { id , media_type } = useParams();

    const items = credits?.map((e) => (   
        <div className='actorslItem'>
            <img 
                src={e.profile_path ? (img_300+e.profile_path) : unavailable}
                alt={e?.name}
                onDragStart={handleDragStart}
                className='actorsItem_img'
                
            />
            <p className='text-danger'>{e?.name}</p>
            <p>{e.character}</p>
        </div>
    ));

    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 5,
        },
        1024: {
            items:7,
        },
    };

    const fetchCredits = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setCredits(data.cast);
      };

      useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
      }, []);

  return (
    <AliceCarousel 
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        mouseTracking
        items={items} 
    />
  );
};

export default Actors;