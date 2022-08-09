import React from "react";
import "./styles/App.scss"
import MyHeader from "./components/UI/header/MyHeader";
import {useSelector} from "react-redux";
import MyMenu from "./components/UI/menu/MyMenu";
import NewsList from "./components/NewsList/NewsList";

function App() {
    //todo attribute flag icons author at the footer

    const opened = useSelector(state => state.menu.opened)

    return (
        <div className="App">
            <MyMenu opened={opened}/>
            <MyHeader/>

            <div className="App__container">
                <NewsList />
            </div>
        </div>
    );
}

export default App;