import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FormularioPago.css';

function FormularioPago() {
  const navigate = useNavigate();
  const location = useLocation();
  const empresa = location.state?.empresa || 'agua potable ambato -EMAPA-up';

  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleContinuar = () => {
    // Validación simple - aceptar cualquier valor
    if (numeroCuenta && descripcion) {
      navigate('/confirmacion-pago', {
        state: {
          empresa,
          numeroCuenta,
          descripcion
        }
      });
    } else {
      alert('Por favor complete todos los campos');
    }
  };

  return (
    <div className="formulario-pago-container">
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
          <p className="form-instruction">
            Completa el formulario para completar el servicio
          </p>

          <div className="form-group">
            <label>*Numero de cuenta :</label>
            <input
              type="text"
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
              placeholder="*23333030314"
            />
          </div>

          <div className="form-group">
            <label>*Descripción :</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="*Pago de agua Octubre"
            />
          </div>
        </div>

        <div className="bottom-section">
          <button className="btn-continuar" onClick={handleContinuar}>
            Continuar
          </button>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default FormularioPago;
