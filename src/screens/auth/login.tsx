import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "@app/constants/config";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { username, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setMsg(`Logged in as ${response.data.user.username}`);
      navigate("/");
    } catch (error: any) {
      if (error.response) {
        setMsg(
          `Login failed: ${error.response.data.message || "Unknown error"}`
        );
      } else {
        setMsg(`Login request failed: ${error.message}`);
      }
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
};

export { Login };
