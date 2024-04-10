import React, { useEffect } from "react";
import axios from "axios";
import Chip from '@mui/material/Chip';

const General = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) => {

    const handelAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handelRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
    }, []);

    return (
        <div style={{ paddingLeft: "10px" }}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    size="small"
                    color="primary"
                    key={genre.id}
                    clickable
                    onDelete={() => handelRemove(genre)}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    color="success"
                    key={genre.id}
                    clickable
                    onClick={() => handelAdd(genre)}
                />
            ))}
        </div>
    );
};

export default General;