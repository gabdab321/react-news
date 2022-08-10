import React from "react";
import "./styles/App.scss"
import MyHeader from "./components/UI/header/MyHeader";
import {useSelector, useDispatch} from "react-redux";
import MyMenu from "./components/UI/menu/MyMenu";
import NewsList from "./components/NewsList/NewsList";
import {closeModalAction, openModalAction} from "./store/reducers/modalReducer";
import CountrySelectModal from "./components/CountrySelectModal/CountrySelectModal";

function App() {
    //todo: attribute flag icons author at the footer
    //todo: remove unused react-modal from package

    const dispatch = useDispatch()

    const isMenuOpened = useSelector(state => state.menu.opened)

    return (
        <div className="App">
            <button onClick={() => dispatch(openModalAction())}>select your country</button>

            <CountrySelectModal/>

            <MyMenu opened={isMenuOpened}/>
            <MyHeader/>

            <div className="App__container">
                <NewsList />
            </div>
        </div>
    );
}

export default App;