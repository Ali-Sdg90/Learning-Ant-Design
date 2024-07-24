import React from "react";
import Style from "./App.module.scss";
import Playground from "./components/Playground";

const App = () => {
    return (
        <div className={Style.container}>
            <h1>Aloha</h1>
            <Playground />
        </div>
    );
};

export default App;
