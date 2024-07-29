import React from "react";
import Style from "./Homepage.module.scss";
import { ConfigProvider, Layout } from "antd";
import Header from "../../components/Homepage/Header/Header";
import Footer from "../../components/Homepage/Footer/Footer";
import Sider from "../../components/Homepage/Sider/Sider";
import Content from "../../components/Homepage/Content/Content";

const {
    Header: AntHeader,
    Content: AntContent,
    Footer: AntFooter,
    Sider: AntSider,
} = Layout;

const Homepage = () => {
    return (
        <div className={Style.container}>
            <ConfigProvider direction={"rtl"}>
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
