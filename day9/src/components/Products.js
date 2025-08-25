import { useEffect, useState } from "react";
import { Table, Button, Popconfirm } from "antd";

function Products({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    { title: "Price", dataIndex: "price" },
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

export default Products;
