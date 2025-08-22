import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Website", dataIndex: "website" },
    {
      title: "Action",
      render: (_, record) => (
        <>
          <Link to={`/users/${record.id}`}>
            <Button type="link">Detail</Button>
          </Link>
          <Button danger onClick={() => handleDelete(record.id)}>Xóa</Button>
        </>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="id" />;
}

export default Users;
