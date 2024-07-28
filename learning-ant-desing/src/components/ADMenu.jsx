import { Divider, Menu, message } from "antd";
import React from "react";

const ADMenu = () => {
    const inlineItems = [
        {
            key: "1",
            label: "Hello-1",
        },
        {
            type: "divider",
        },
        {
            key: "2",
            label: "Group",
            type: "group",
            children: [
                {
                    key: "21",
                    label: "Group Child-1",
                },
                {
                    key: "22",
                    label: "Group Child-2",
                },
                {
                    key: "23",
                    label: "Group Child with Children",
                    children: [
                        {
                            key: "231",
                            label: "Children1",
                        },
                        {
                            key: "232",
                            label: "Children2",
                        },
                    ],
                },
            ],
        },
    ];

    const verticalItems = [
        {
            type: "divider",
        },
        {
            key: "3",
            label: "Hello with Children",
            children: [
                {
                    key: "31",
                    label: "Hello Ha",
                },
                {
                    key: "32",
                    label: "Aloha",
                },
                {
                    key: "33",
                    label: "YooHaHaHa",
                    children: [
                        {
                            key: "331",
                            label: "Yoo",
                        },
                        {
                            key: "332",
                            label: "HaHaHa",
                            children: [
                                {
                                    key: "3321",
                                    label: "Ha",
                                },
                                {
                                    key: "3322",
                                    label: "Ha",
                                },
                                {
                                    key: "3323",
                                    label: "Ha",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    //
    // recursive function
    //
    const findLabelByKey = (items, key) => {
        for (const item of items) {
            if (item.key === key) {
                return item.label;
            }
            if (item.children) {
                const childLabel = findLabelByKey(item.children, key);
                if (childLabel) {
                    return childLabel;
                }
            }
        }
        return null;
    };

    const handleClick = (e) => {
        const { key } = e;
        const label = findLabelByKey([...inlineItems, ...verticalItems], key);
        if (label) {
            console.log(label);
            message.info(`You clicked on "${label}" with key "${key}"`);
        }
    };

    return (
        <div>
            <Divider />
            <Menu
                items={inlineItems}
                theme="dark"
                style={{ width: 300 }}
                mode="inline"
                onClick={handleClick}
            />
            <Menu
                items={verticalItems}
                theme="dark"
                style={{ width: 300 }}
                mode="vertical"
                onClick={handleClick}
            />
        </div>
    );
};

export default ADMenu;
