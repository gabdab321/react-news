import React from 'react';
import cl from "./ThemeToggler.module.scss"
import {toggleTheme} from "../../store/reducers/themeReducer";
import {useDispatch} from "react-redux";

const ThemeToggler = () => {
    const dispatch = useDispatch()

    return (
        <div className={cl.switch}>
            Dark Theme:
            <label className="switch" id="switch">
                <input type="checkbox" onClick={() => dispatch(toggleTheme())}/>
                <span className="slider round"/>
            </label>
        </div>
    );
};

export default ThemeToggler;