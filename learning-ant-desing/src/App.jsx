import React, { useState } from "react";
import Style from "./App.module.scss";
import Playground from "./pages/Playground";
import { Button, ConfigProvider, Typography, theme } from "antd";

const { Title } = Typography;

const App = () => {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleClick = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    return (
        <div className={Style.container}>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}
            >
                <Title level={1} strong className="white-text">
                    Aloha
                </Title>
                <Button onClick={handleClick}>
                    Change Theme to {isDarkMode ? "Light" : "Dark"}
                </Button>
                <Playground />
            </ConfigProvider>
        </div>
    );
};

export default App;
