import { api } from "../services/api";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      console.log("Te deslogueaste");
      const response = await api.post("/logout");

      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error("Error al logout:", err.response?.data || err.message);
    }
  };

  return <button onClick={logout}>Logout</button>;
}
