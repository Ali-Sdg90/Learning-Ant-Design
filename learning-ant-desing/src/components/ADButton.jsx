import React, { useEffect, useState } from "react";
import { Button } from "antd";

// import diceIcon from "../assets/images/dice-icon.svg";
import { SearchOutlined } from "@ant-design/icons";

const ADButton = () => {
    const [btn1, setBtn1] = useState(false);

    useEffect(() => {
        if (btn1) {
            setTimeout(() => {
                setBtn1(false);
            }, 2000);
        }
    }, [btn1]);

    return (
        <div>
            <Button
                danger={btn1}
                ghost={!btn1}
                loading={btn1}
                icon={<SearchOutlined />}
                iconPosition={btn1 ? "start" : "end"}
                size={btn1 ? "large" : "middle"}
                shape="round"
                type="primary"
                onClick={() => setBtn1((prevState) => !prevState)}
                style={{marginTop: 20}}
            >
                {btn1 ? "Aloha" : "Hello"}
            </Button>
        </div>
    );
};

export default ADButton;
