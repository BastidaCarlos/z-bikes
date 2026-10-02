import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import ProtectedRoute from "./protectedRoutes"

import Home from "../pages/Home"
import Comunidad from "../pages/Comunidad"
import RetoZ from "../pages/RetoZ"
import Rutas from "../pages/Rutas"
import Resultados from "../pages/Resultados"

import AdminLogin from "../pages/AdminLogin"
import Admin from "../pages/Admin"
import Test from "../pages/Test"

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/comunidad" element={<Comunidad />} />
                <Route path="/reto-z" element={<RetoZ />} />
                <Route path="/rutas" element={<Rutas />} />
                <Route path="/resultados" element={<Resultados />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/test" element={<Test />} />
            </Route>
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;