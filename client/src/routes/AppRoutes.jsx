import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import ProtectedRoute from "./ProtectedRoutes"

import Home from "../pages/Home/Home"
import Comunidad from "../pages/Community/Comunidad"
import RetoZ from "../pages/RetoZ/RetoZ"
import Rutas from "../pages/Rutas/Rutas"
import Resultados from "../pages/Resultados/Resultados"

import AdminLogin from "../pages/Admin/Login/AdminLogin"
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard"

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/comunidad" element={<Comunidad />} />
                <Route path="/reto-z" element={<RetoZ />} />
                <Route path="/rutas" element={<Rutas />} />
                <Route path="/resultados" element={<Resultados />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes;