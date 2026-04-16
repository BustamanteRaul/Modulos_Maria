import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      setMessage("Complete todos los campos");
      return;
    }
    try {
      const response = await api.post("/login", form);
      if (response.status === 200) {
        setMessage("Login exitoso");
        console.log(response.data);
      } else {
        setMessage("Login fallido");
        console.log(response.data);
      }
    } catch (error) {
      setMessage("Error al iniciar sesión");
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
