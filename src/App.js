import React from "react";
import "./styles/App.scss"
import MyHeader from "./components/UI/header/MyHeader";

function App() {

    return (
        <div className="App">
            <MyHeader/>

            <div className="App__container">
            </div>
        </div>
    );
}

export default App;