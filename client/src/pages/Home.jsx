import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const res = await API.get("/auth/me");
        setMessage(`Welcome! Your UserID: ${res.data.userId}`);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };
    fetchProtected();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
