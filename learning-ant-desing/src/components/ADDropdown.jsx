import {
    AndroidFilled,
    AppleFilled,
    DownOutlined,
    GroupOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, message } from "antd";
import React, { useEffect, useState } from "react";

const ADDropdown = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenChange = (nextOpen, info) => {
        if (info.source === "trigger" || nextOpen) {
            setOpen(nextOpen);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const loadingState = !!Math.floor(Math.random() * 2);
            setIsLoading(loadingState);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleMenuClick = (e) => {
        console.log(e.key);
    };

    const menuItems = [
        {
            key: "0",
            type: "group",
            icon: <GroupOutlined />,
            label: "Group",
            children: [
                { key: "0-1", label: "groupItem1" },
                { key: "0-2", label: "groupItem2" },
            ],
        },
        { type: "divider" },
        {
            key: "1",
            label: <a href="#">Link1</a>,
            icon: <AndroidFilled />,
        },
        {
            key: "2",
            label: <a href="#">Link2</a>,
            icon: <AppleFilled />,
            disabled: true,
        },
        {
            key: "3",
            label: "Nested Dropdown",
            icon: <AppleFilled />,
            children: [
                { key: "1-1", label: "children1" },
                {
                    key: "1-2",
                    label: "children2",
                    children: [
                        { key: "1-2-1", label: "children2-1" },
                        { key: "1-2-2", label: "children2-2" },
                        { key: "1-2-3", label: "children2-3" },
                    ],
                },
                { key: "1-3", label: "children3" },
            ],
        },
        {
            type: "divider",
        },
        {
            key: "4",
            label: "Hello",
            icon: <AppleFilled />,
            danger: true,
        },
    ];

    return (
        <div>
            <Flex vertical justify="center" align="center" gap="small">
                <Dropdown
                    placement="topLeft"
                    arrow
                    menu={{ items: menuItems, onClick: handleMenuClick }}
                    trigger={["hover"]}
                >
                    <Button icon={<DownOutlined />}>Hover me</Button>
                </Dropdown>

                <Dropdown.Button
                    menu={{ items: menuItems, onClick: handleMenuClick }}
                    arrow
                    placement="topRight"
                    style={{ width: "auto" }}
                    onOpenChange={handleOpenChange}
                    open={open}
                    loading={!open && isLoading}
                >
                    {"<Dropdown.Button>"}
                </Dropdown.Button>

                <Dropdown
                    menu={{
                        items: [
                            {
                                key: "1",
                                label: "Hello :)",
                            },
                            {
                                key: "2",
                                label: "Today's Date",
                                children: [
                                    {
                                        key: "21",
                                        label: "1403-05-08",
                                    },
                                    {
                                        key: "22",
                                        label: "12:39 AM",
                                    },
                                ],
                            },
                            {
                                key: "3",
                                label: "Note to Yourself",
                                children: [
                                    { key: "31", label: "Drink Water :)" },
                                ],
                            },
                        ],
                        onClick: handleMenuClick,
                    }}
                    trigger={["contextMenu"]}
                >
                    <div
                        style={{
                            border: "1px solid gray",
                            background: "#222",
                            width: 400,
                            height: 200,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 8,
                        }}
                    >
                        Right Click Here!
                    </div>
                </Dropdown>
            </Flex>
        </div>
    );
};

export default ADDropdown;