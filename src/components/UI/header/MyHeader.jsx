import React, {useState} from 'react';
import {ReactComponent as NewsLogo} from "../../../img/news_logo.svg";
import cl from "./MyHeader.module.scss"
import MyNavbar from "../navbar/MyNavbar";
import {useDispatch} from "react-redux";
import {closeMenuAction, openMenuAction} from "../../../store/reducers/menuReducer";

const MyHeader = () => {
    const dispatch = useDispatch()
    const [isMenuActive, setIsMenuActive] = useState(false)

    const onMenu = () => {
        if(isMenuActive) {
            dispatch(closeMenuAction())
        }else{
            dispatch(openMenuAction())
        }

        setIsMenuActive(!isMenuActive)
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