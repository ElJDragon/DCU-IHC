import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación simple - cualquier input es válido
    if (usuario && contrasena) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h1>Bienvenido a<br />tu Banca Web</h1>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                placeholder="Ingrese su nombre de usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="******************"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-ingresar">Ingresar</button>
          </form>
        </div>
      </div>

      <div className="login-right">
        <div className="logo-banco">
          <div className="logo-yellow">◣</div>
          <div className="logo-text">
            <span className="banco">BANCO</span><br />
            <span className="pichincha">PICHINCHA</span>
          </div>
        </div>

        <div className="verificacion-info">
          <h2>Verifica en tu navegador que estás en Banca Web.</h2>
          
          <div className="secure-icon">
            <div className="lock-icon">🔒</div>
            <span>https://bancaweb.pichincha.com/pichincha/login</span>
          </div>

          <div className="illustration">
            <div className="person-illustration">👤</div>
          </div>

          <ol className="instructions">
            <li>Cuida tu usuario y contraseña</li>
            <li>Antes de ingresar la Clave Digital verifica que los 4 últimos dígitos de tu cédula sean correctos.</li>
          </ol>

          <div className="footer-text">
            Términos de uso © 2025 Banco Pichincha. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
