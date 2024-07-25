import { Button, Flex, Radio } from "antd";
import React, { useEffect, useState } from "react";

const ADFlex = () => {
    const [gap, setGap] = useState("small");
    const [justify, setJustify] = useState("center");
    const [align, setAlign] = useState("center");

    const alignArray = ["flex-start", "center", "flex-end"];
    const justifyArray = [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
    ];
    const gapArray = ["small", "middle", "large", 32];

    useEffect(() => {
        console.log(align);
    }, [align]);

    return (
        <div>
            <Flex vertical gap="middle">
                <Flex justify="center" align="center" gap="middle" vertical>
                    <Radio.Group
                        defaultValue={"center"}
                        onChange={(e) => setAlign(e.target.value)}
                    >
                        {alignArray.map((item, index) => {
                            return (
                                <Radio.Button key={index} value={item}>
                                    {item}
                                </Radio.Button>
                            );
                        })}
                    </Radio.Group>

                    <Radio.Group
                        defaultValue={"center"}
                        onChange={(e) => setJustify(e.target.value)}
                    >
                        {justifyArray.map((item, index) => {
                            return (
                                <Radio.Button key={index} value={item}>
                                    {item}
                                </Radio.Button>
                            );
                        })}
                    </Radio.Group>

                    <Radio.Group
                        defaultValue={"small"}
                        onChange={(e) => setGap(e.target.value)}
                    >
                        {gapArray.map((item, index) => (
                            <Radio.Button key={index} value={item}>
                                {item}
                            </Radio.Button>
                        ))}
                    </Radio.Group>
                </Flex>

                <Flex
                    align={align}
                    justify={justify}
                    gap={gap}
                    style={{ height: 120 }}
                >
                    <Button type="primary">Btn1</Button>
                    <Button type="primary">Btn2</Button>
                    <Button type="primary">Btn3</Button>
                    <Button type="primary">Btn4</Button>
                </Flex>
            </Flex>
        </div>
    );
};

export default ADFlex;
