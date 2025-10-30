import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ColorModeProvider } from './context/ColorModeContext';
import Login from './pages/Login';
import Home from './pages/Home';
import PagoServicios from './pages/PagoServicios';
import EmpresasAgua from './pages/EmpresasAgua';
import FormularioPago from './pages/FormularioPago';
import ConfirmacionPago from './pages/ConfirmacionPago';
import VerificacionPago from './pages/VerificacionPago';
import PagoExitoso from './pages/PagoExitoso';
import './App.css';

function App() {
  return (
    <ColorModeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pago-servicios" element={<PagoServicios />} />
            <Route path="/empresas-agua" element={<EmpresasAgua />} />
            <Route path="/empresas-electricidad" element={<EmpresasAgua />} />
            <Route path="/empresas-sri" element={<EmpresasAgua />} />
            <Route path="/formulario-pago" element={<FormularioPago />} />
            <Route path="/confirmacion-pago" element={<ConfirmacionPago />} />
            <Route path="/verificacion-pago" element={<VerificacionPago />} />
            <Route path="/pago-exitoso" element={<PagoExitoso />} />
          </Routes>
        </div>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
