import React from 'react';
import cl from "./MyPagination.module.scss"
import ReactPaginate from "react-paginate";
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md"

const MyPagination = ({onPageChange, pageCount}) => {
    return (
        <ReactPaginate
            pageCount={pageCount}
            breakLabel="..."
            previousLabel={MdOutlineArrowBackIos()}
            nextLabel={MdOutlineArrowForwardIos()}
            pageRangeDisplayed={1}
            className={cl.className}
            pageLinkClassName={cl.link}
            activeLinkClassName={cl.activeLinkClassName}
            onPageChange={onPageChange}
        />
    );
};

export default MyPagination;