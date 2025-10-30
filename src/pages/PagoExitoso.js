import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ColorModeToggle from '../components/ColorModeToggle';
import AccessibleModeToggle from '../components/AccessibleModeToggle';
import './PagoExitoso.css';

function PagoExitoso() {
  const navigate = useNavigate();
  const location = useLocation();
  const { empresa, numeroCuenta } = location.state || {};

  return (
    <div className="pago-exitoso-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="page-header-banco">
          <div className="logo-banco-header">
            <div className="logo-yellow-header">◣</div>
            <div className="logo-text-header">
              <span>BANCO</span><br />
              <span>PICHINCHA</span>
            </div>
          </div>
          <div className="header-actions">
            <ColorModeToggle compact />
            <AccessibleModeToggle compact />
          </div>
        </header>

        <div className="page-content-exitoso">
          <div className="success-card">
            <h2 className="success-title">Pago exitoso ✓</h2>
            
            <p className="success-desde">Desde: Cuenta <strong>******{numeroCuenta?.slice(-4) || '0000'}</strong></p>
            
            <p className="success-para">Para Cuenta <strong>******11111</strong></p>
          </div>
        </div>

        <div className="bottom-section-exitoso">
          <button className="btn-otro-pago" onClick={() => navigate('/pago-servicios')}>
            Realizar otro pago
          </button>
          <button className="btn-inicio" onClick={() => navigate('/home')}>
            Regresar al inicio
          </button>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default PagoExitoso;
