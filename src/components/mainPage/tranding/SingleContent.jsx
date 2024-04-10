import React from "react";
import { img_300 , unavailable } from "./config";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const SingleContent = ({
    id,
    poster,
    title,
    media_type,
    date,
    vote_average,
}) => {

    const url = "/DetailsPage/";
    // Variables movies Vote 
    let number = vote_average;
    let roundedNumber = parseFloat(number.toFixed(1));

    return (
        <div>
            <div className="media">
                <li>
                    <Badge badgeContent={roundedNumber} color={roundedNumber > 6.9?"secondary" : "primary"} />
                    <Link to={url+`${media_type}/${id}`}><img src={ poster? `${img_300}/${poster}` : unavailable } alt={title} /></Link>
                    <h2>{title}</h2>
                    <div>
                        <h6>{date}</h6><h6>{media_type}</h6>
                    </div>
                </li> 
            </div>
        </div>
    );
};

export default SingleContent;