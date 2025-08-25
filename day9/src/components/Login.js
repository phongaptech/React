import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button } from "antd";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const ok = onLogin(username, password);
    if (ok) navigate("/dashboard");
    else alert("Sai tài khoản hoặc mật khẩu!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card title="Login" style={{ width: 300 }}>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: 10 }} />
        <Button type="primary" onClick={handleSubmit} style={{ marginTop: 10, width: "100%" }}>
          Login
        </Button>
      </Card>
    </div>
  );
}

export default Login;
