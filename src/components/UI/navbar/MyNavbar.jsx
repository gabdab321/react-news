import React from 'react';
import cl from "./MyNavbar.module.scss"
import {BiNews} from "react-icons/bi";

const MyNavbar = ({mainClassName, linkClassName}) => {
    const mainClasses = [mainClassName, cl.nav].join(" ")
    const linkClasses = [linkClassName, cl.nav__link].join(" ")

    return (
        <nav className={mainClasses}>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>business</a>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>entertainment</a>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>health</a>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>science</a>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>sports</a>
            <a className={linkClasses} onClick={e => e.preventDefault()} href="#"><BiNews className={cl.nav__icon}/>technology</a>
        </nav>
    );
};

export default MyNavbar;