import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../tranding/SingleContent";
import CustomPagination from "../tranding/CustomPagination";
import SearchIcon from "./search.svg";

const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page])

    return (
        <div className="py-5">
            <div style={{ display: "flex", margin: "60px", paddingTop: 60 }}>
                <input
                    style={{ flex: 1 }}
                    className="form-control"
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Type to Search..."
                />

                <button type="button" class="btn btn-outline-success" style={{ marginLeft: 10 }} onClick={fetchSearch}>
                    <img src={SearchIcon} className="m-1"/>
                </button>
            </div>

            <div >
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    variant="fullWidth"
                    onChange={(e, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                >
                    <Tab style={{color:"green"}} label="Search Movies Here" />
                    <Tab style={{color:"green"}} label="Search TV Series Here" />
                </Tabs>

            </div>
            <div className="grid py-4">
                {content && content.map((e) => (
                    <div className="d-flex scrolls">
                        <SingleContent
                            key={e.id}
                            id={e.id}
                            poster={e.poster_path}
                            title={e.title || e.name}
                            media_type={type ? "TV" : "movie"}
                            date={e.release_date || e.first_air_date}
                            vote_average={e.vote_average}
                        />
                    </div>
                ))}
            </div>
            <hr />
            <div className='position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-p' >
                {numOfPages > 1 && (
                    <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                )}
            </div>

        </div>
    );
};

export default Search;