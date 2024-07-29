import { Button, Col, Row } from "antd";
import React from "react";

const ADGrid = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <Button block size="large">
                        {"span={8}"}
                    </Button>
                </Col>
                <Col span={8}>
                    <Button block size="large">
                        {"span={8}"}
                    </Button>
                </Col>
                <Col span={8}>
                    <Button block size="large">
                        {"span={8}"}
                    </Button>
                </Col>
            </Row>

            <Row justify="space-around" style={{ margin: "20px 0"}}>
                <Col>justify="space-around"</Col>
                <Col>justify="space-around"</Col>
                <Col>justify="space-around"</Col>
            </Row>
        </div>
    );
};

export default ADGrid;
