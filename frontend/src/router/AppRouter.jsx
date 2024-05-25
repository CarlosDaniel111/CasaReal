import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PropiedadesPage } from "../pages/PropiedadesPage";
import { MapaPage } from "../pages/MapaPage";
import { ProfilePage } from "../pages/ProfilePage";
import { PublicarPage } from "../pages/PublicarPage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propiedades" element={<PropiedadesPage />} />
        <Route path="/mapa" element={<MapaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/post" element={<PublicarPage />} />
        <Route path="/post/:post_id" element={<HomePage />} />
        <Route path="/user/:user_id" element={<HomePage />} />

        <Route path="*" element={<Navigate to="/" replace={false} />} />
      </Routes>
    </BrowserRouter>
  );
};
