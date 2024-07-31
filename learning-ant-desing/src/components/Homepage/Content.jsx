import { Card, Col, Flex, Grid, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { SmileFilled } from "@ant-design/icons";

import { ReactComponent as Cutlery } from "../../assets/images/homepage/content/cutlery 2 (1).svg";
import { ReactComponent as Note } from "../../assets/images/homepage/content/Note - Text (2).svg";
import { ReactComponent as Hat } from "../../assets/images/homepage/content/chef's hat (1).svg";
import { ReactComponent as Arrow } from "../../assets/images/homepage/content/Chevron - Left.svg";

const Content = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

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
            icon: <SmileFilled />,
        },
        {
            title: "عنوان آگهی",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "شماره تماس",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "تاریخ ثبت",
            dataIndex: "date",
            key: "date",
        },
        { title: "", dataIndex: "details", key: "details" },
    ];

    const dataSource = Array(9)
        .fill(0)
        .map((_, index) => {
            if (index % 2) {
                return {
                    key: 2,
                    profileImg: "",
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
            <Col span={24} className="quick-access-section">
                <Card title="دسترسی سریع">
                    <Row gutter={[23, 23]}>
                        <Col span={8}>
                            <Card className="quick-access-1 quick-access-btns">
                                <Row>
                                    <Col span={5}>
                                        <Flex justify="center" align="center">
                                            <Cutlery />
                                        </Flex>
                                    </Col>

                                    <Col span={17}>
                                        <Flex vertical>
                                            <div className="btn-title">
                                                مجموعه‌های جدید
                                            </div>
                                            <div className="btn-amount">
                                                18 مجموعه جدید
                                            </div>
                                        </Flex>
                                    </Col>

                                    <Col span={2}>
                                        <Flex justify="center" align="center">
                                            <Arrow />
                                        </Flex>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card className="quick-access-2 quick-access-btns">
                                <Row>
                                    <Col span={5}>
                                        <Flex justify="center" align="center">
                                            <Note />
                                        </Flex>
                                    </Col>

                                    <Col span={17}>
                                        <Flex vertical>
                                            <div className="btn-title">
                                                آگهی‌های جدید
                                            </div>
                                            <div className="btn-amount">
                                                5 آگهی جدید
                                            </div>
                                        </Flex>
                                    </Col>

                                    <Col span={2}>
                                        <Flex justify="center" align="center">
                                            <Arrow />
                                        </Flex>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card className="quick-access-3 quick-access-btns">
                                <Row>
                                    <Col span={5}>
                                        <Flex justify="center" align="center">
                                            <Hat />
                                        </Flex>
                                    </Col>

                                    <Col span={17}>
                                        <Flex vertical>
                                            <div className="btn-title">
                                                کارجوهای جدید
                                            </div>
                                            <div className="btn-amount">
                                                7 کارجوی جدید
                                            </div>
                                        </Flex>
                                    </Col>

                                    <Col span={2}>
                                        <Flex justify="center" align="center">
                                            <Arrow />
                                        </Flex>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col span={24} className="table-section">
                <Card title="لیست آگهی جدید">
                    <Table
                        // loading={isLoading}
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
