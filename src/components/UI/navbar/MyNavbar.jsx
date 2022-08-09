import React from 'react';
import cl from "./MyNavbar.module.scss"
import {BiNews} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {changeCategoryAction} from "../../../store/reducers/categoryReducer";
import {resetPaginationAction} from "../../../store/reducers/pagintaionReducer";
import {setMenuOpened} from "../../../store/reducers/menuReducer";

const MyNavbar = ({mainClassName, linkClassName}) => {
    const dispatcher = useDispatch()

    function onHref(e) {
        e.preventDefault()
        dispatcher(changeCategoryAction(e.target.dataset.category))
        dispatcher(setMenuOpened(false))
        dispatcher(resetPaginationAction())
    }

    const mainClasses = [mainClassName, cl.nav].join(" ")
    const linkClasses = [linkClassName, cl.nav__link].join(" ")

    return (
        <nav className={mainClasses}>
            <a data-category="general" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>general</a>
            <a data-category="business" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>business</a>
            <a data-category="entertainment" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>entertainment</a>
            <a data-category="health" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>health</a>
            <a data-category="science" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>science</a>
            <a data-category="sports" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>sports</a>
            <a data-category="technology" className={linkClasses} onClick={onHref} href="#"><BiNews className={cl.nav__icon}/>technology</a>
        </nav>
    );
};

export default MyNavbar;