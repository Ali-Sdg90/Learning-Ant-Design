import React from "react";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const redBorder = {
    border: "1px solid #5c0000",
};

const ADLayout = () => {
    return (
        <div>
            <Layout>
                <Sider style={redBorder}>Sider</Sider>
                <Layout>
                    <Header style={redBorder}>Header</Header>
                    <Content style={{ height: "100px" }}>Content</Content>
                    <Footer style={redBorder}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default ADLayout;
