import React, {useEffect} from 'react';
import cl from "./ThemeToggler.module.scss"
import {toggleTheme} from "../../store/reducers/themeReducer";
import {useDispatch, useSelector} from "react-redux";

const ThemeToggler = () => {
    const dispatch = useDispatch()

    const theme = useSelector(state => state.theme.currentTheme)

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.style.setProperty("--text-color", `var(--text-color-${theme})`)
        document.body.style.setProperty("--main-color", `var(--main-color-${theme})`)
        document.body.style.setProperty("--secondary-color", `var(--secondary-color-${theme})`)
        document.body.style.setProperty("--active-color", `var(--active-color-${theme})`)
    }, [theme])

    return (
        <div className={cl.switch}>
            Dark Theme:
            <label className="switch" id="switch">
                <input checked={theme !== "light_theme"} type="checkbox" onClick={() => dispatch(toggleTheme())}/>
                <span className="slider round"/>
            </label>
        </div>
    );
};

export default ThemeToggler;