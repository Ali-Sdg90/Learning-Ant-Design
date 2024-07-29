import React from "react";
import Style from "./Homepage.module.scss";
import { ConfigProvider, Layout } from "antd";
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
    const theme = {
        token: {
            fontFamily:
                'IRANYekanFN, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
    };

    return (
        <div className={Style.container}>
            <ConfigProvider direction={"rtl"} theme={theme}>
                <Layout>
                    <AntSider>
                        <Sider />
                    </AntSider>
                    <Layout>
                        <AntHeader>
                            <Header />
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
        </div>
    );
};

export default Homepage;
