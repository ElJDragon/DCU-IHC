import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ConfirmacionPago.css';

function ConfirmacionPago() {
  const navigate = useNavigate();
  const location = useLocation();
  const { empresa, numeroCuenta, descripcion } = location.state || {};

  const monto = 10.08;
  const costo = 0.35;

  const handleRealizarPago = () => {
    navigate('/verificacion-pago', {
      state: { empresa, numeroCuenta, descripcion, monto, costo }
    });
  };

  return (
    <div className="confirmacion-pago-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="page-header">
          <button className="back-btn" onClick={() => navigate(-1)}>←</button>
          <h1 className="header-title">Pago de servicios</h1>
        </header>

        <div className="page-content">
          <p className="valor-label">El valor a pagar es de</p>
          <h2 className="monto">$ {monto.toFixed(2)}</h2>

          <div className="info-box editable">
            ! El valor total no es editable
          </div>

          <div className="cuenta-origen">
            <div className="cuenta-info">
              <p className="cuenta-label">Desde</p>
              <h3>Username</h3>
              <p className="cuenta-numero">******0000</p>
            </div>
            <div className="cuenta-saldo">
              <p className="saldo-label">Saldo Disponible</p>
              <p className="saldo-monto">$ 20.00 &gt;</p>
            </div>
          </div>

          <p className="para-label">para</p>
          <p className="empresa-destino">{empresa || 'agua potable ambato -EMAPA-up'}</p>

          <div className="info-box costo">
            ! Esta transaccion tiene un costo de ${costo.toFixed(2)}
          </div>
        </div>

        <div className="bottom-section">
          <button className="btn-realizar-pago" onClick={handleRealizarPago}>
            Realizar el pago
          </button>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmacionPago;
