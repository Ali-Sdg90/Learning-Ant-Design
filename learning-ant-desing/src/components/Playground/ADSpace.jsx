import { InfoCircleOutlined } from "@ant-design/icons";
import RefIcon from "@ant-design/icons/lib/icons/AimOutlined";
import { Button, Divider, Dropdown, Radio, Space, Tooltip } from "antd";
import React from "react";

const ADSpace = () => {
    return (
        <div>
            <Space direction="vertical" style={{ width: "60%" }}>
                <Divider style={{ width: "100%" }} />

                <Space split={<Divider type="vertical" />}>
                    <Button type="text">Text1</Button>
                    <Button type="text">Text2</Button>
                    <Button type="text">Text3</Button>
                </Space>

                {/* <Radio.Group defaultValue={2}>
                    <Radio.Button value={1}>Text1</Radio.Button>
                    <Radio.Button value={2}>Text2</Radio.Button>
                    <Radio.Button value={3}>Text3</Radio.Button>
                </Radio.Group> */}

                <Radio.Group defaultValue={2}>
                    {[1, 2, 3].map((number, index) => (
                        <Radio.Button key={index} value={number}>
                            Radio.Group {number}
                        </Radio.Button>
                    ))}
                </Radio.Group>

                <Space.Compact>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <Radio.Button
                                key={index}
                                value={index}
                                // size={"large"}
                            >
                                Space.Compact{index}
                            </Radio.Button>
                        ))}
                </Space.Compact>

                {/* <Divider style={{ width: "100%" }} /> */}

                <Space.Compact>
                    <Tooltip title="Hello">
                        <Button type="primary">Hello</Button>
                    </Tooltip>
                    <Tooltip title="Aloha">
                        <Button type="dashed" disabled>
                            Aloha
                        </Button>
                    </Tooltip>
                    <Tooltip title="Hi">
                        <Button type="default">Hi</Button>
                    </Tooltip>
                    <Tooltip title="Tooltip">
                        <Dropdown
                            placement="bottomRight"
                            // menu={{
                            //     items: [
                            //         {
                            //             key: 1,
                            //             icon: <RefIcon />,
                            //             label: "Random Text 1",
                            //         },
                            //         {
                            //             key: 2,
                            //             icon: <RefIcon />,
                            //             label: "Random Text 2",
                            //         },
                            //         {
                            //             key: 3,
                            //             icon: <RefIcon />,
                            //             label: "Random Text 3",
                            //         },
                            //     ],
                            // }}
                            menu={{
                                items: Array(3)
                                    .fill(0)
                                    .map((_, index) => ({
                                        key: index,
                                        label: `RandomText${index + 1}`,
                                        icon: <RefIcon />,
                                    })),
                            }}
                        >
                            <Button icon={<InfoCircleOutlined />}>
                                Dropdown
                            </Button>
                        </Dropdown>
                    </Tooltip>
                </Space.Compact>

                {/* <Divider style={{ width: "100%" }} /> */}

                <Space.Compact direction="vertical">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <Button key={index}>-{index + 1}-</Button>
                        ))}
                </Space.Compact>
            </Space>

            <Divider style={{ width: "100%" }} />

            <a
                href="https://ant.design/components/dropdown"
                onClick={(e) => e.preventDefault()}
            >
                {`<a href="..." onClick={(e) => e.preventDefault()}>`}
            </a>
            
            <Divider style={{ width: "100%" }} />
        </div>
    );
};

export default ADSpace;
