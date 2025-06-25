import React from "react";
import { Home, Project } from "@app/screens";
import { Login } from "@app/screens/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/query";

function App() {
  const { data } = useAuth();

  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
