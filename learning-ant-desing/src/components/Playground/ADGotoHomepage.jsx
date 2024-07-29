import { HomeFilled } from "@ant-design/icons";
import { Button, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ADGotoHomepage = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        message.info("Redirect to Homepage");
        navigate("/homepage");
    };

    return (
        <div>
            <Button
                onClick={clickHandler}
                icon={<HomeFilled />}
                size="large"
                style={{ marginTop: 16 }}
            >
                Go to Homepage
            </Button>
        </div>
    );
};

export default ADGotoHomepage;
