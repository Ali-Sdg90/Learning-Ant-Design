import React, { useState } from "react";
import { Typography } from "antd";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const ADTypography = () => {
    const [text, setText] = useState("Editable Text");

    return (
        <div>
            <Paragraph
                copyable={{
                    icon: [
                        <SmileOutlined key="copy-icon" />,
                        <SmileFilled key="copied-icon" />,
                    ],
                    text: "Aloha You Copy me :)",
                    tooltips: ["click Me!", "you clicked!!"],
                }}
                className="white-text"
                style={{ margin: 20 }}
            >
                Custom Copy icon and replace tooltips text.
            </Paragraph>

            <Typography.Title
                level={3}
                style={{ margin: 0 }}
                className="white-text"
                onChange={setText}
                editable={{
                    tooltip: "click to edit text",
                    onChange: setText,
                }}
            >
                {text}
            </Typography.Title>
        </div>
    );
};

export default ADTypography;
