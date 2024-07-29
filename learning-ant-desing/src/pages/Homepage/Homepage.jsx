import React, { useState } from "react";
import Style from "./Homepage.module.scss";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import Header from "../../components/Homepage/Header";
import Footer from "../../components/Homepage/Footer";
import Sider from "../../components/Homepage/Sider";
import Content from "../../components/Homepage/Content";

const {
    Header: AntHeader,
    Content: AntContent,
    Footer: AntFooter,
    Sider: AntSider,
} = Layout;

const Homepage = () => {
    const [collapsed, setCollapsed] = useState(true);

    const { defaultAlgorithm } = antdTheme;

    const theme = {
        algorithm: defaultAlgorithm,

        token: {
            fontFamily:
                'IRANYekanFN, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
    };

    return (
        <ConfigProvider
            direction={"rtl"}
            theme={theme}
            className={Style.container}
        >
            <Layout className="main-layout" style={{ minHeight: "100vh" }}>
                <AntSider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    width={270}
                    collapsedWidth={70}
                    trigger={null}
                >
                    <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
                </AntSider>
                <Layout>
                    <AntHeader>
                        <Header setCollapsed={setCollapsed} />
                    </AntHeader>
                    <AntContent>
                        <Content />
                    </AntContent>
                    <AntFooter>
                        <Footer />
                    </AntFooter>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Homepage;
