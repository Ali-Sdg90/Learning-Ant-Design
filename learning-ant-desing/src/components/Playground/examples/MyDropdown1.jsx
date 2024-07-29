import {
    AndroidFilled,
    AppleFilled,
    DownOutlined,
    GroupOutlined,
    SettingOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message } from "antd";
import React from "react";

const MyDropdown1 = () => {
    const handleMenuClick = (e) => {
        message.info(`Clicked on item ${e.key}`);
    };

    const menuItems = [
        {
            key: "group",
            type: "group",
            icon: <GroupOutlined />,
            label: "Group",
            children: [
                { key: "groupItem1", label: "Group Item 1" },
                { key: "groupItem2", label: "Group Item 2" },
            ],
        },
        { type: "divider" },
        {
            key: "link1",
            label: <a href="#">Link 1</a>,
            icon: <AndroidFilled />,
        },
        {
            key: "link2",
            label: <a href="#">Link 2</a>,
            icon: <AppleFilled />,
            disabled: true,
        },
        {
            key: "nested",
            label: "Nested Dropdown",
            icon: <SettingOutlined />,
            children: [
                { key: "nested1", label: "Nested Item 1" },
                {
                    key: "nested2",
                    label: "Nested Item 2",
                    children: [
                        { key: "nested2-1", label: "Nested Item 2-1" },
                        { key: "nested2-2", label: "Nested Item 2-2" },
                    ],
                },
                { key: "nested3", label: "Nested Item 3" },
            ],
        },
        { type: "divider" },
        {
            key: "user",
            label: "User",
            icon: <UserOutlined />,
            children: [
                { key: "profile", label: "Profile" },
                { key: "settings", label: "Settings" },
                {
                    key: "logout",
                    label: "Logout",
                    icon: <LogoutOutlined />,
                    danger: true,
                },
            ],
        },
        { type: "divider" },
        {
            key: "button",
            label: <Button type="primary">Button Item</Button>,
            icon: <AppleFilled />,
        },
    ];

    const menu = <Menu onClick={handleMenuClick} items={menuItems} />;

    return (
        <div style={{ margin: 10 }}>
            <Dropdown overlay={menu} trigger={["click"]}>
                <Button type="primary" icon={<DownOutlined />}>
                    Click Me
                </Button>
            </Dropdown>
        </div>
    );
};

export default MyDropdown1;
