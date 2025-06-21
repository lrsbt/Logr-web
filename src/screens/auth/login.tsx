import { useState } from "react";
import { API_URL } from "@app/constants/config";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { username, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setMsg(`Logged in as ${response.data.user.username}`);
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
