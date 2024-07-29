import React from "react";
import { Layout, Menu } from "antd";
import { ReactComponent as AlertOctagon } from "../../assets/images/homepage/sider/Alert - Octagon (1).svg";
import { ReactComponent as MainLogo } from "../../assets/images/homepage/sider/main-logo.svg";
import { ReactComponent as ChefsHat } from "../../assets/images/homepage/sider/chef's hat.svg";
import { ReactComponent as CommentText } from "../../assets/images/homepage/sider/Comment - Text (2).svg";
import { ReactComponent as CreditCard } from "../../assets/images/homepage/sider/Credit Card (2).svg";
import { ReactComponent as Cutlery } from "../../assets/images/homepage/sider/cutlery 2.svg";
import { ReactComponent as Home } from "../../assets/images/homepage/sider/Home.svg";
import { ReactComponent as NoteText } from "../../assets/images/homepage/sider/Note - Text (1).svg";
import { ReactComponent as Smartphone } from "../../assets/images/homepage/sider/Smartphone (1).svg";
import { ReactComponent as Tag } from "../../assets/images/homepage/sider/Tag - 2 (2).svg";
import { ReactComponent as UserEdit } from "../../assets/images/homepage/sider/User - Edit (1).svg";
import { ReactComponent as Users } from "../../assets/images/homepage/sider/Users (1).svg";
import Content from "./Content";

const { Sider } = Layout;

const SiderComponent = ({ collapsed, setCollapsed }) => {
    const items = [
        { key: "1", label: "صفحه اصلی", icon: <Home /> },
        { key: "2", label: "لیست مجموعه‌ها", icon: <Cutlery /> },
        { key: "3", label: "لیست کارجو‌ها", icon: <NoteText /> },
        { key: "4", label: "لیست آگهی‌ها", icon: <ChefsHat /> },
        { type: "divider" },
        { key: "5", label: "مجموعه‌های جدید", icon: <UserEdit /> },
        { key: "6", label: "آگهی‌های جدید", icon: <CreditCard /> },
        { key: "7", label: "کارجويان جدید", icon: <AlertOctagon /> },
        { key: "8", label: "پیگیری تراکنش های مالی", icon: <AlertOctagon /> },
        { key: "9", label: "نظرات ثبت شده", icon: <CommentText /> },
        { type: "divider" },
        { key: "10", label: "مدیریت ادمین‌ها", icon: <Users /> },
        { key: "11", label: "سطوح دسترسی", icon: <Tag /> },
        { key: "12", label: "تنظیمات", icon: <Smartphone /> },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                width={270}
                collapsedWidth={70}
                trigger={null}
            >
                <div className="admin-panel">
                    <MainLogo className="admin-panel-icon" />
                    <div>پنل مدیریت</div>
                </div>
                <Menu items={items} theme="light" mode="inline" />
            </Sider>
            {/* <Layout>
                <button onClick={() => setCollapsed(!collapsed)}>
                    Toggle Collapse
                </button>
            </Layout> */}
        </Layout>
    );
};

export default SiderComponent;
