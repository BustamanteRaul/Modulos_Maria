import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import "./index.css";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
