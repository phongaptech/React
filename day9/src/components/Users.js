import { useEffect, useState } from "react";
import { Table, Button, Popconfirm } from "antd";

function Users({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Action",
      render: (_, record) =>
        user.role === "admin" ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
            <Button danger>Delete</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
}

export default Users;
