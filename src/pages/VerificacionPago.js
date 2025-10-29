import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerificacionPago.css';

function VerificacionPago() {
  const navigate = useNavigate();
  const location = useLocation();
  const { empresa, numeroCuenta, monto, costo } = location.state || {};

  const handleConfirmar = () => {
    navigate('/pago-exitoso', {
      state: { empresa, numeroCuenta, monto, costo }
    });
  };

  return (
    <div className="verificacion-pago-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="page-header">
          <button className="back-btn" onClick={() => navigate(-1)}>←</button>
          <h1 className="header-title">Confirmar Pago</h1>
        </header>

        <div className="page-content">
          <div className="confirmacion-mensaje">
            <h2>Confirmar estos datos para<br />realizar la transacción</h2>

            <div className="check-icon">
              <div className="check-circle">
                <span className="checkmark">✓</span>
              </div>
            </div>

            <div className="detalles-transaccion">
              <p className="detalle-item"><strong>Vas a pagar$ {monto?.toFixed(2) || '10.08'}</strong></p>
              <p className="detalle-item">De la cuenta: <strong>******{numeroCuenta?.slice(-4) || '0000'}</strong></p>
              <p className="detalle-item detalle-empresa">
                <strong>A la Empresa: </strong>{empresa || 'agua potable ambato -EMAPA-up'}
              </p>
              <p className="detalle-item detalle-costo">
                Esta transaccion tiene un costo de <strong>${costo?.toFixed(2) || '0.35'}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <button className="btn-realizar-pago" onClick={handleConfirmar}>
            Realizar el pago
          </button>
          <button className="btn-regresar" onClick={() => navigate(-1)}>
            Regresar
          </button>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default VerificacionPago;
