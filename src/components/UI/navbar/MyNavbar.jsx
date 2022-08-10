import React from 'react';
import cl from "./MyNavbar.module.scss"
import {BiNews} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {changeCategoryAction} from "../../../store/reducers/categoryReducer";
import {resetPaginationAction} from "../../../store/reducers/pagintaionReducer";
import {setMenuOpened} from "../../../store/reducers/menuReducer";
import {NEWS_CATEGORIES} from "../../../consts/newsCategories"
import NavbarLink from "./navbar__link/NavbarLink";
import {COUNTRIES} from "../../../consts/countries";

const MyNavbar = ({mainClassName, linkClassName}) => {
    const dispatcher = useDispatch()

    function onHref(e) {
        e.preventDefault()
        dispatcher(changeCategoryAction(e.target.dataset.category))
        dispatcher(setMenuOpened(false))
        dispatcher(resetPaginationAction())
    }

    const mainClasses = [mainClassName, cl.nav].join(" ")

    return (
        <nav className={mainClasses}>
            {NEWS_CATEGORIES.map(category => {
                return <NavbarLink key={category} category={category} linkClassName={linkClassName} onClick={onHref}/>
            })}

        </nav>
    );
};

export default MyNavbar;