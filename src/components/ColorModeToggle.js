import React from 'react';
import { useColorMode } from '../context/ColorModeContext';
import './ColorModeToggle.css';

function ColorModeToggle({ compact = false }) {
  const { isDaltonicMode, toggleColorMode } = useColorMode();

  return (
    <button 
      className={`color-mode-toggle ${compact ? 'compact' : ''}`}
      onClick={toggleColorMode}
      aria-label="Cambiar modo de color"
      title={isDaltonicMode ? 'Cambiar a Modo Normal' : 'Cambiar a Modo Daltónico'}
    >
      {compact ? (
        isDaltonicMode ? '👁️' : '🎨'
      ) : (
        isDaltonicMode ? '👁️ Modo Normal' : '🎨 Modo Daltónico'
      )}
    </button>
  );
}

export default ColorModeToggle;
