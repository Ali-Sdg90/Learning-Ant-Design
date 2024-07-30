import { Card, Col, Pagination, Row, Table } from "antd";
import React from "react";

const Content = () => {
    const columns = [
        {
            title: "",
            dataIndex: "profile-img",
            key: "profileImg",
        },
        {
            title: "نام مجموعه",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name - b.name,
        },
        {
            title: "عنوان آگهی",
            dataIndex: "title",
            key: "title",
            sorter: (a, b) => a.title - b.title,
        },
        {
            title: "شماره تماس",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            sorter: (a, b) => a.phoneNumber - b.phoneNumber,
        },
        {
            title: "تاریخ ثبت",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => a.date - b.date,
        },
        { title: "", dataIndex: "details", key: "details" },
    ];

    const dataSource = [
        {
            key: 1,
            profileImg: <div className="gray-circle"></div>,
            name: "چلوگباب رفتاری (شعبه سعادت آباد)",
            title: "آشپز",
            phoneNumber: "09120148529",
            date: "1402/09/09",
            details: "جزئیات",
        },
        {
            key: 2,
            profileImg: "",
            name: "چلوگباب رفتاری (شعبه سعادت آباد)",
            title: "آشپز",
            phoneNumber: "09120148529",
            date: "1402/09/09",
            details: "جزئیات",
        },
    ];
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Card>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>کارجوهای جدید</Card>
                        </Col>
                        <Col span={8}>
                            <Card>آگهی‌های جدید</Card>
                        </Col>
                        <Col span={8}>
                            <Card>مجموعه‌های جدید</Card>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col span={24}>
                <Card title="لیست آگهی جدید">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{ defaultCurrent: 1, total: 50 }}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default Content;
