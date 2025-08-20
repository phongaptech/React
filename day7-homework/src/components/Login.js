import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "user@gmail.com" && password === "password123") {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate("/home");
    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <TextField style={{ paddingBottom: "10px" }} id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <TextField style={{ paddingBottom: "10px" }} id="outlined-basic" label="Passwork" variant="outlined" type="passwork" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <Button variant="contained" type="sumbit" onClick={handleLogin}>Login</Button>
    </div>
  );
}

export default Login;
