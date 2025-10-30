import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorModeToggle from '../components/ColorModeToggle';
import AccessibleModeToggle from '../components/AccessibleModeToggle';
import './PagoServicios.css';

function PagoServicios() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categorias = [
    { icon: '💧', name: 'Agua Potable', path: '/empresas-agua' },
    { icon: '💡', name: 'Electricidad', path: '/empresas-electricidad' },
    { icon: '📄', name: 'SRI', path: '/empresas-sri' }
  ];

  return (
    <div className="pago-servicios-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="page-header">
          <button className="back-btn" onClick={() => navigate('/home')}>←</button>
          <div className="header-actions">
            <ColorModeToggle compact />
            <AccessibleModeToggle compact />
          </div>
        </header>

        <div className="page-content">
          <h1 className="page-title">Pago de Servicios</h1>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Escribe el nombre de la empresa"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="section-header">
            <h2>Categorías Destacadas</h2>
            <a href="#" className="ver-todos">Ver Todos &gt;</a>
          </div>

          <div className="categorias-grid">
            {categorias.map((cat, index) => (
              <div
                key={index}
                className="categoria-card"
                onClick={() => navigate(cat.path)}
              >
                <div className="categoria-icon">{cat.icon}</div>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>

          <div className="section-header">
            <h2>Categorías Destacadas ⭐</h2>
          </div>

          <div className="favorito-card">
            <div className="favorito-info">
              <h3>Username</h3>
              <p className="favorito-cuenta">******0000</p>
              <p className="favorito-saldo-label">Saldo Disponible</p>
              <p className="favorito-saldo">$ 20.00</p>
            </div>
            <div className="favorito-extra">
              <span className="favorito-star">⭐ Favorita</span>
              <p className="favorito-tipo">Tipo de<br/>cuenta</p>
            </div>
          </div>

          <button className="btn-add-favorito">
            <span className="add-icon">+</span>
            <span>Añadir Servicio Favorito</span>
          </button>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default PagoServicios;
