import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import AgentesVirtuales from "../pages/AgentesVirtuales";
import Extensiones from "../pages/Extensiones";
import HistorialLlamadas from "../pages/HistorialLlamadas";
import BaseConocimiento from "../pages/BaseConocimiento";
import PreguntasFrecuentes from "../pages/PreguntasFrecuentes";
import Automatizaciones from "../pages/Automatizaciones";
import Usuarios from "../pages/Usuarios";
import Departamentos from "../pages/Departamentos";
import Sucursales from "../pages/Sucursales";
import CloudUCM from "../pages/CloudUCM";
import Reportes from "../pages/Reportes";
import Auditoria from "../pages/Auditoria";
import Configuracion from "../pages/Configuracion";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="agentes-virtuales" element={<AgentesVirtuales />} />
        <Route path="extensiones" element={<Extensiones />} />
        <Route path="historial-llamadas" element={<HistorialLlamadas />} />

        <Route path="base-conocimiento" element={<BaseConocimiento />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="automatizaciones" element={<Automatizaciones />} />

        <Route path="usuarios" element={<Usuarios />} />
        <Route path="departamentos" element={<Departamentos />} />
        <Route path="sucursales" element={<Sucursales />} />

        <Route path="cloud-ucm" element={<CloudUCM />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="auditoria" element={<Auditoria />} />
        <Route path="configuracion" element={<Configuracion />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;