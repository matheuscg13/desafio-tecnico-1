// @ts-nocheck

import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/index.jsx";
import { EditPage } from "../pages/editPage/index.jsx";
import LoginPage from "../pages/login/index.jsx";
import RegisterPage from "../pages/registerPage/index.jsx";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/contatos" element={<DashBoard />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/editar" element={<EditPage />} />
    </Routes>
  );
};

export default RoutesMain;
