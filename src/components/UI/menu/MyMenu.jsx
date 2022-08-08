import React from 'react';
import cl from "./MyMenu.module.scss"
import "./Menu.scss"
import MyNavbar from "../navbar/MyNavbar";
import {CSSTransition} from "react-transition-group";

const MyMenu = ({opened}) => {
    console.log(opened)

    return (
        <CSSTransition
            in={opened}
            timeout={700}
            classNames="menu"
        >
            <div className={cl.menu}>
                <MyNavbar mainClassName={cl.menu__nav} linkClassName={cl.menu__link} />
            </div>
        </CSSTransition>
    );
};

export default MyMenu;