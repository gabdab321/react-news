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

    const isMenuOpened = useSelector(state => state.menu.opened)

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