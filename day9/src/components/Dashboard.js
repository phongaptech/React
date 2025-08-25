import { Layout, Menu } from "antd";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Users from "./Users";
import Products from "./Products";

const { Header, Sider, Content } = Layout;

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="users">Users</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="products">Products</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff" }}>Role: {user.role}</Header>
        <Content style={{ margin: "16px" }}>
          <Routes>
            <Route path="users" element={<Users user={user} />} />
            <Route path="products" element={<Products user={user} />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
