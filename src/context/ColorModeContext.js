import React, { createContext, useState, useContext, useEffect } from 'react';

const ColorModeContext = createContext();

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode debe usarse dentro de ColorModeProvider');
  }
  return context;
};

export const ColorModeProvider = ({ children }) => {
  const [isDaltonicMode, setIsDaltonicMode] = useState(() => {
    const saved = localStorage.getItem('daltonicMode');
    return saved === 'true';
  });

  const [isAccessibleMode, setIsAccessibleMode] = useState(() => {
    const saved = localStorage.getItem('accessibleMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('daltonicMode', isDaltonicMode);
    localStorage.setItem('accessibleMode', isAccessibleMode);
    
    if (isDaltonicMode) {
      document.documentElement.setAttribute('data-color-mode', 'daltonic');
    } else {
      document.documentElement.removeAttribute('data-color-mode');
    }

    if (isAccessibleMode) {
      document.documentElement.setAttribute('data-accessible-mode', 'true');
    } else {
      document.documentElement.removeAttribute('data-accessible-mode');
    }
  }, [isDaltonicMode, isAccessibleMode]);

  const toggleColorMode = () => {
    setIsDaltonicMode(prev => !prev);
  };

  const toggleAccessibleMode = () => {
    setIsAccessibleMode(prev => !prev);
  };

  return (
    <ColorModeContext.Provider value={{ 
      isDaltonicMode, 
      toggleColorMode,
      isAccessibleMode,
      toggleAccessibleMode
    }}>
      {children}
    </ColorModeContext.Provider>
  );
};
