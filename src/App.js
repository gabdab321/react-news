import React from "react";
import "./styles/App.scss"
import MyHeader from "./components/UI/header/MyHeader";
import {useSelector} from "react-redux";
import MyMenu from "./components/UI/menu/MyMenu";
import NewsList from "./components/NewsList/NewsList";

function App() {
    const opened = useSelector(state => state.menu.opened)

    console.log(opened)

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