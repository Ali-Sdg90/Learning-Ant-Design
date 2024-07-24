import React from "react";
import Style from "./App.module.scss";
import Playground from "./pages/Playground";
import { Typography } from "antd";

const { Title } = Typography;

const App = () => {
    return (
        <div className={Style.container}>
            <Title level={1} strong className="white-text">Aloha</Title>
            <Playground />
        </div>
    );
};

export default App;
