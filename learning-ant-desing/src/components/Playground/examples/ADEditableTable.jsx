import React, { useState } from "react";
import { Table, Input } from "antd";

const ADEditableTable = () => {
    const initialData = [
        { key: "1", name: "Mike", age: 32, address: "10 Downing Street" },
        { key: "2", name: "John", age: 42, address: "10 Downing Street" },
    ];

    const [data, setData] = useState(initialData);

    const handleInputChange = (e, key, column) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, [column]: e.target.value });
            setData(newData);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text, record, index) =>
                index === 0 ? (
                    <Input
                        value={record.name}
                        onChange={(e) =>
                            handleInputChange(e, record.key, "name")
                        }
                    />
                ) : (
                    text
                ),
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            render: (text, record, index) =>
                index === 0 ? (
                    <Input
                        value={record.age}
                        onChange={(e) =>
                            handleInputChange(e, record.key, "age")
                        }
                    />
                ) : (
                    text
                ),
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            render: (text, record, index) =>
                index === 0 ? (
                    <Input
                        value={record.address}
                        onChange={(e) =>
                            handleInputChange(e, record.key, "address")
                        }
                    />
                ) : (
                    text
                ),
        },
    ];

    return <Table dataSource={data} columns={columns} />;
};

export default ADEditableTable;
