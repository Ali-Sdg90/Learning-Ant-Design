import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

const ADTitle = ({ isDarkMode, setIsDarkMode }) => {
    const handleClick = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    return (
        <div>
            <Title level={1} strong className="white-text">
                Aloha
            </Title>
            <Button onClick={handleClick}>
                Change Theme to {isDarkMode ? "Light" : "Dark"}
            </Button>
        </div>
    );
};

export default ADTitle;
