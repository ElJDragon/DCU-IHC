import React from 'react';
import { useNavigate } from 'react-router-dom';
import ColorModeToggle from '../components/ColorModeToggle';
import AccessibleModeToggle from '../components/AccessibleModeToggle';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="mobile-frame">
        <div className="status-bar">
          <span className="time">⌚</span>
          <span className="signal">━━━</span>
        </div>

        <header className="home-header">
          <div className="logo-banco-mobile">
            <div className="logo-yellow-mobile">◣</div>
            <div className="logo-text-mobile">
              <span>BANCO</span><br />
              <span>PICHINCHA</span>
            </div>
          </div>
          <div className="header-actions">
            <ColorModeToggle compact />
            <AccessibleModeToggle compact />
            <button className="help-btn">? Ayuda</button>
          </div>
        </header>

        <div className="qr-section">
          <h3>Cobra con tu QR</h3>
          <p className="qr-subtitle">El dinero llegará a: ******0000 👁️ 📤</p>
          
          <div className="qr-code">
            <div className="qr-placeholder">
              ▓▓▓▓▓▓▓<br/>
              ▓░░░░░▓<br/>
              ▓░▓▓▓░▓<br/>
              ▓░░░░░▓<br/>
              ▓▓▓▓▓▓▓
            </div>
          </div>

          <div className="quick-actions-qr">
            <div className="action-item">
              <div className="action-icon">🛡️</div>
              <span>Verificar<br/>Transferencia</span>
            </div>
            <div className="action-item">
              <div className="action-icon">🇩</div>
              <span>Pagar<br/>con QR</span>
            </div>
            <div className="action-item">
              <div className="action-icon">🔑</div>
              <span>Clave<br/>Digital</span>
            </div>
          </div>
        </div>

        <div className="products-section">
          <div className="section-header">
            <h3>Mis Productos</h3>
            <a href="#" className="ver-todo">Ver todo &gt;</a>
          </div>

          <div className="product-tabs">
            <button className="tab active">Todos</button>
            <button className="tab">Cuentas</button>
            <button className="tab">Tarjetas</button>
            <button className="tab">Prestam</button>
          </div>

          <div className="product-card favorite">
            <div className="product-info">
              <h4>Username</h4>
              <p className="account-number">******0000</p>
              <p className="balance-label">Saldo Disponible</p>
              <p className="balance">$ 20.00 👁️</p>
            </div>
            <div className="product-extra">
              <span className="favorite-star">⭐ Favorita</span>
              <p className="account-type">Tipo de<br/>cuenta</p>
            </div>
          </div>

          <div className="pagination">1 de N &gt;</div>
        </div>

        <div className="actions-section">
          <h3>¿Qué quieres hacer?</h3>
          
          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon-large">💰</div>
              <span>Transferir<br/>Dinero</span>
            </div>
            <div className="action-card">
              <div className="action-icon-large">💵</div>
              <span>Recibir<br/>Dinero</span>
            </div>
            <div className="action-card">
              <div className="action-icon-large">🇩</div>
              <span>Escanear o<br/>Mostrar QR</span>
            </div>
            <div className="action-card" onClick={() => navigate('/pago-servicios')}>
              <div className="action-icon-large">💡</div>
              <span>Pagar<br/>Servicios</span>
            </div>
            <div className="action-card">
              <div className="action-icon-large">💳</div>
              <span>Pagar<br/>Tarjetas</span>
            </div>
            <div className="action-card">
              <div className="action-card">
              <div className="action-icon-large">🏧</div>
              <span>Retirar sin<br/>Tarjeta</span>
            </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <button className="nav-btn">⚪</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
