import { Button, Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { SmileFilled } from "@ant-design/icons";
import QuickAccess from "./QuickAccess";

import { ReactComponent as Arrow } from "../../assets/images/homepage/content/Chevron - Left.svg";
import { ReactComponent as Swap } from "../../assets/images/homepage/content/swap-icon.svg";
import { ReactComponent as Up } from "../../assets/images/homepage/content/up-arrow.svg";
import { ReactComponent as Down } from "../../assets/images/homepage/content/down-arrow.svg";

const Content = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const columns = [
        {
            title: "",
            dataIndex: "profile-img",
            key: "profileImg",
            render: (_, record) => record.profileImg,
            width: "10.1%",
        },
        {
            title: (
                <Button type="text" icon={<Swap />}>
                    نام مجموعه
                </Button>
            ),
            dataIndex: "name",
            key: "name",
            width: "23.82%",
        },
        {
            title: (
                <Button type="text" icon={<Swap />}>
                    عنوان آگهی
                </Button>
            ),
            dataIndex: "title",
            key: "title",
            width: "19.67%",
        },
        {
            title: (
                <Button type="text" icon={<Swap />}>
                    شماره تماس
                </Button>
            ),
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            width: "21.08%",
        },
        {
            title: (
                <Button type="text" icon={<Swap />}>
                    تاریخ ثبت
                </Button>
            ),
            dataIndex: "date",
            key: "date",
            width: "14.08%",
        },
        {
            title: "",
            dataIndex: "details",
            key: "details",
            render: (_, record) => (
                <Button
                    type="text"
                    icon={<Arrow />}
                    iconPosition={"end"}
                    className="details-btn"
                >
                    {record.details}
                </Button>
            ),
        },
    ];

    const dataSource = Array(9)
        .fill(0)
        .map((_, index) => {
            if (index % 2) {
                return {
                    key: 2,
                    profileImg: <div className="gray-circle"></div>,
                    name: "رستوران البرز",
                    title: "سالن کار",
                    phoneNumber: "09120148529",
                    date: "1402/09/09",
                    details: "جزئیات",
                };
            } else {
                return {
                    key: 1,
                    profileImg: <div className="gray-circle"></div>,
                    name: "چلوگباب رفتاری (شعبه سعادت آباد)",
                    title: "آشپز",
                    phoneNumber: "09120148529",
                    date: "1402/09/09",
                    details: "جزئیات",
                };
            }
        });

    return (
        <Row gutter={[24, 24]} className="content">
            <QuickAccess />

            <Col span={24} className="table-section">
                <Card title="لیست آگهی جدید">
                    <Table
                        loading={isLoading}
                        dataSource={!isLoading && dataSource}
                        columns={!isLoading && columns}
                        pagination={{
                            defaultCurrent: 1,
                            total: 50,
                            showLessItems: true,
                        }}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default Content;
