import React from 'react';
import cl from "./MyLoader.module.scss"
import {BiLoaderAlt} from "react-icons/bi"

const MyLoader = () => {
    return (
        <BiLoaderAlt className={cl.loader}/>
    );
};

export default MyLoader;