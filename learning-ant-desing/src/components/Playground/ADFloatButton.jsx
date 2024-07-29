import { FloatButton } from "antd";
import React, { useState } from "react";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";

const ADFloatButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifCount, setNotifCount] = useState(90);

    return (
        <div>
            <FloatButton.BackTop style={{ right: 90 }} type="default">
                Hello
            </FloatButton.BackTop>

            <FloatButton.Group
                trigger="click"
                open={isOpen}
                icon={<CustomerServiceOutlined />}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <FloatButton
                    icon={<CommentOutlined />}
                    onClick={() => setNotifCount((prevState) => prevState + 1)}
                />
                <FloatButton
                    description="Hello"
                    onClick={() => setNotifCount((prevState) => prevState - 1)}
                />
                <FloatButton
                    style={{ height: 50, width: 50, left: 80 }}
                    type="primary"
                    icon={<CommentOutlined />}
                    description="Hello"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                    badge={{ count: notifCount, color: "red" }}
                />
            </FloatButton.Group>
        </div>
    );
};

export default ADFloatButton;
