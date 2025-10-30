import React from 'react';
import { useColorMode } from '../context/ColorModeContext';
import './AccessibleModeToggle.css';

function AccessibleModeToggle({ compact = false }) {
  const { isAccessibleMode, toggleAccessibleMode } = useColorMode();

  return (
    <button 
      className={`accessible-mode-toggle ${compact ? 'compact' : ''}`}
      onClick={toggleAccessibleMode}
      aria-label="Cambiar modo accesible"
      title={isAccessibleMode ? 'Desactivar Modo Accesible' : 'Activar Modo Accesible'}
    >
      {compact ? (
        isAccessibleMode ? 'Aa' : 'AA'
      ) : (
        isAccessibleMode ? 'Aa Normal' : 'AA Grande'
      )}
    </button>
  );
}

export default AccessibleModeToggle;
