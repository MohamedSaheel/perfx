import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Components/DashBoard/Dashboard";
import Stepper from "./DashBoard/stepper/Stepper";
const Pages = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to="/perfx/dashboard" />}
      ></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/create" element={<Stepper />}></Route>
    </Routes>
  );
};

export default Pages;
