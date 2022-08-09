import React from 'react';
import {ReactComponent as NewsLogo} from "../../../img/news_logo.svg";
import cl from "./MyHeader.module.scss"
import MyNavbar from "../navbar/MyNavbar";
import {useDispatch, useSelector} from "react-redux";
import {setMenuOpened} from "../../../store/reducers/menuReducer";

const MyHeader = () => {
    const dispatch = useDispatch()
    const isMenuActive = useSelector(state => state.menu.opened)

    const onMenu = () => {
        if(isMenuActive) {
            dispatch(setMenuOpened(false))
        }else{
            dispatch(setMenuOpened(true))
        }

        dispatch(setMenuOpened(!isMenuActive))
    }

    let hamburgerClasses = [cl.header__hamburger , "hamburger", "hamburger--spring"]

    if(isMenuActive) hamburgerClasses.push("is-active")

    return (
        <header className={cl.header}>
            <div className={cl.header__container}>

                <NewsLogo className={cl.header__logo}/>

                <MyNavbar linkClassName={cl.header__link} className={cl.header__nav}/>

                <button onClick={onMenu} className={hamburgerClasses.join(" ")} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner" />
                    </span>
                </button>

            </div>
        </header>
    );
};

export default MyHeader;