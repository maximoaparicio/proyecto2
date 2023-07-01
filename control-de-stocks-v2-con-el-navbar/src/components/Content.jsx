import { Routes, Route } from "react-router-dom";
import ClientesPage from "../pages/clientes/ClientesPage";
import ClientesForm from "../pages/clientes/ClientesForm";
import ProductosPage from "../pages/productos/ProductosPage";
import ProductosForm from "../pages/productos/ProductosForm";
import UsuariosPage from "../pages/usuarios/UsuariosPage";
import UsuariosForm from "../pages/usuarios/UsuariosForm";
import FacturasPage from "../pages/facturas/FacturasPage";
import VentasPage from "../pages/ventas/VentasPage";
import VentasForm from "../pages/ventas/VentasForm";
import NotFound from "../pages/NotFound";
import FacturasForm from "../pages/facturas/FacturasForm";
import Home from "../pages/Home";

import RegistroPage from "../pages/autenticacion/RegistroPage";
import LoginPage from "../pages/autenticacion/LoginPage";

function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />

        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/clientes/new" element={<ClientesForm />} />
        <Route path="/clientes/edit/:id" element={<ClientesForm />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos/new" element={<ProductosForm />} />
        <Route path="/productos/edit/:id" element={<ProductosForm />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuarios/new" element={<UsuariosForm />} />
        <Route path="/usuarios/edit/:id" element={<UsuariosForm />} />
        <Route path="/facturas" element={<FacturasPage />} />
        <Route path="/facturas/new" element={<FacturasForm />} />
        <Route path="/facturas/edit/:id" element={<FacturasForm />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/ventas/new" element={<VentasForm />} />
        <Route path="/ventas/edit/:id" element={<VentasForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Content;
