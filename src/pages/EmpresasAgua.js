import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorModeToggle from '../components/ColorModeToggle';
import AccessibleModeToggle from '../components/AccessibleModeToggle';
import './EmpresasAgua.css';

function EmpresasAgua() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const empresas = [
    { name: 'agua potable ambato -EMAPA-up', subtitle: 'Agua Potable - Agua' },
    { name: 'agua potable quito -epmaps -up', subtitle: 'Agua Potable - Agua' },
    { name: 'agua potable quito -epmaps -up', subtitle: 'Agua Potable - Agua' },
    { name: 'agua potable quito -epmaps -up', subtitle: 'Agua Potable - Agua' },
    { name: 'agua potable quito -epmaps -up', subtitle: 'Agua Potable - Agua' }
  ];

  return (
    <div className="empresas-agua-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="page-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate('/pago-servicios')}>←</button>
            <h1 className="header-title">Agua</h1>
          </div>
          <div className="header-actions">
            <ColorModeToggle compact />
            <AccessibleModeToggle compact />
          </div>
        </header>

        <div className="page-content">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Escribe el nombre de la empresa"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="empresas-list">
            {empresas.map((empresa, index) => (
              <div
                key={index}
                className="empresa-item"
                onClick={() => navigate('/formulario-pago', { state: { empresa: empresa.name } })}
              >
                <div className="empresa-info">
                  <h3>{empresa.name}</h3>
                  <p>{empresa.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default EmpresasAgua;
