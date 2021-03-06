import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
