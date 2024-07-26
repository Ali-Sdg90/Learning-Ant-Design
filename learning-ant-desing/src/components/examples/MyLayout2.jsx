import { RedditSquareFilled, RocketFilled } from "@ant-design/icons";
import RefIcon from "@ant-design/icons/lib/icons/AccountBookOutlined";
import { Breadcrumb, Button, Layout, Menu, Typography } from "antd";
import React, { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const MyLayout2 = () => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div>
            <Layout style={{ width: "100%", margin: "20px 0" }}>
                <Header style={{ width: "100%" }}>
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        items={[
                            { key: 1, icon: <RefIcon />, label: "item1" },
                            {
                                key: 2,
                                icon: <RedditSquareFilled />,
                                label: "item2",
                            },
                            {
                                key: 3,
                                icon: <RocketFilled />,
                                label: "item3",
                            },
                        ]}
                    />
                </Header>

                <Layout>
                    <Sider
                        width={200}
                        collapsed={collapse}
                        trigger={null}
                        collapsible
                        collapsedWidth={50}
                    >
                        <Menu
                            mode="vertical"
                            theme="dark"
                            items={[
                                { key: 4, icon: <RefIcon />, label: "item4" },
                                {
                                    key: 5,
                                    icon: <RedditSquareFilled />,
                                    label: "item5",
                                },
                                {
                                    key: 6,
                                    icon: <RocketFilled />,
                                    label: "item6",
                                },
                            ]}
                        />
                    </Sider>

                    <Layout style={{ width: "75%" }}>
                        <Content>
                            <Breadcrumb style={{padding: 20}}>
                                <Breadcrumb.Item>
                                    Breadcrumb.Item1
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Breadcrumb.Item2
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Breadcrumb.Item3
                                </Breadcrumb.Item>
                            </Breadcrumb>

                            <Typography.Title>Title</Typography.Title>

                            <Button
                                size="large"
                                onClick={() =>
                                    setCollapse((prevState) => !prevState)
                                }
                            >
                                Change Menu State
                            </Button>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default MyLayout2;
