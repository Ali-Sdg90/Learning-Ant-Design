import { Button, Layout, Menu, Breadcrumb } from "antd";

import React, { useState } from "react";

import {
    AndroidOutlined,
    AppleOutlined,
    Html5Outlined,
    JavaScriptOutlined,
    WindowsOutlined,
    UserOutlined,
} from "@ant-design/icons";

import RefIcon from "@ant-design/icons/lib/icons/AccountBookFilled";

const { Header, Sider, Content, Footer } = Layout;

const MyLayout1 = () => {
    const [isCollapse, setIsCollapse] = useState(false);

    const userMenu = (
        <Menu
            items={[
                { key: "1", label: "Profile", icon: <UserOutlined /> },
                { key: "2", label: "Settings", icon: <UserOutlined /> },
                { key: "3", label: "Logout", icon: <UserOutlined /> },
            ]}
        />
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header
                style={{
                    background: "#001529",
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={[
                        { key: 1, icon: <AndroidOutlined />, label: "TopNav1" },
                        { key: 2, icon: <AppleOutlined />, label: "TopNav2" },
                        { key: 3, icon: <WindowsOutlined />, label: "TopNav3" },
                    ]}
                />

                {/* <Dropdown overlay={userMenu}>
                    <Space>
                        <Avatar icon={<UserOutlined />} />
                        <DownOutlined />
                    </Space>
                </Dropdown> */}
            </Header>

            <Layout>
                <Sider
                    width="25%"
                    trigger={null}
                    collapsible
                    collapsed={isCollapse}
                    style={{ background: "#001529" }}
                >
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "sub1",
                                icon: <Html5Outlined />,
                                label: "Navigation One",
                                children: [
                                    { key: 1, label: "Option 1" },
                                    { key: 2, label: "Option 2" },
                                    { key: 3, label: "Option 3" },
                                ],
                            },
                            {
                                key: "sub2",
                                icon: <JavaScriptOutlined />,
                                label: "Navigation Two",
                                children: [
                                    { key: 4, label: "Option 4" },
                                    { key: 5, label: "Option 5" },
                                    { key: 6, label: "Option 6" },
                                ],
                            },
                            {
                                key: "sub3",
                                icon: <RefIcon />,
                                label: "Navigation Three",
                                children: [
                                    { key: 7, label: "Option 7" },
                                    { key: 8, label: "Option 8" },
                                    { key: 9, label: "Option 9" },
                                ],
                            },
                        ]}
                    />
                </Sider>

                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            background: "#222",
                        }}
                    >
                        <Button
                            size="large"
                            onClick={() =>
                                setIsCollapse((prevState) => !prevState)
                            }
                        >
                            Collapse: {isCollapse.toString()}
                        </Button>
                    </Content>

                    <Footer style={{ textAlign: "center" }}>
                        ©2024©Ali©Sadeghi©
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MyLayout1;
