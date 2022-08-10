import React, {useEffect} from "react";
import "./styles/App.scss"
import MyHeader from "./components/UI/header/MyHeader";
import {useSelector, useDispatch} from "react-redux";
import MyMenu from "./components/UI/menu/MyMenu";
import NewsList from "./components/NewsList/NewsList";
import CountrySelectModal from "./components/CountrySelectModal/CountrySelectModal";
import CountrySelectTrigger from "./components/countrySelectTrigger/CountrySelectTrigger";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";

function App() {
    //todo: attribute flag icons author at the footer
    //todo: remove unused react-modal from package

    const dispatch = useDispatch()

    const isMenuOpened = useSelector(state => state.menu.opened)
    const theme = useSelector(state => state.theme.currentTheme)

    useEffect(() => {
        document.body.style.setProperty("--text-color", `var(--text-color-${theme})`)
        document.body.style.setProperty("--main-color", `var(--main-color-${theme})`)
        document.body.style.setProperty("--secondary-color", `var(--secondary-color-${theme})`)
        document.body.style.setProperty("--active-color", `var(--active-color-${theme})`)
    }, [theme])

    return (
        <div className="App">
            <CountrySelectModal/>

            <MyMenu opened={isMenuOpened}/>
            <MyHeader/>

            <div className="App__container">
                <ThemeToggler/>
                <CountrySelectTrigger/>
                <NewsList />
            </div>
        </div>
    );
}

export default App;