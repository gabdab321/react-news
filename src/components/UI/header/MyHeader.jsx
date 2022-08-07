import React from 'react';
import {ReactComponent as NewsLogo} from "../../../img/news_logo.svg";
import cl from "./MyHeader.module.scss"
import {BiNews} from "react-icons/bi";
import {IoMenuOutline} from "react-icons/io5"

const MyHeader = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__container}>
                <NewsLogo className={cl.header__logo}/>

                <nav className={cl.header__nav}>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>business</a>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>entertainment</a>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>health</a>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>science</a>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>sports</a>
                    <a className={cl.header__link} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.header__icon}/>technology</a>
                    <IoMenuOutline className={ cl["header__menu-icon"] }/>
                </nav>
            </div>
        </header>
    );
};

export default MyHeader;