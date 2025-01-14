import React, { createContext, useContext, useState } from 'react';

// Criando o contexto de tema
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeDisplay = () => {
  const { darkTheme } = useContext(ThemeContext);

  return <div>O tema atual é: {darkTheme ? 'Escuro' : 'Claro'}</div>;
};

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Alternar Tema
    </button>
  );
};

// Uso dos componentes
const ThemeApp = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeDisplay />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default ThemeApp;
