import React from "react";
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);

    };

    return (
        <div>
              <Pagination 
                onChange={(e) => handlePageChange(e.target.textContent)} 
                count={numOfPages} 
                variant="outlined"
                shape="rounded" 
                hideNextButton
                hidePrevButton
                siblingCount={2}
                boundaryCount={2} 
                 />
        </div>
    );
};

export default CustomPagination;