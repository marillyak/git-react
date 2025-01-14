
# Explicação dos Componentes Criados

Estes componentes mostram como utilizar `useRef` para manipular elementos do DOM ou armazenar referências a intervalos, e como usar Context API para gerenciar estados globais na aplicação de maneira eficiente.

## Exercício 1: Foco em um Input

### Descrição
O componente cria um campo de entrada de texto e um botão. Quando o botão é clicado, o campo recebe foco automaticamente.

### Código
```js
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focar Input</button>
    </div>
  );
};

export default FocusInput;
```

### Explicação
- **`useRef(null)`**: Cria uma referência ao campo de entrada.
- **`ref={inputRef}`**: Conecta o campo de entrada à referência criada.
- **`inputRef.current.focus()`**: Quando o botão é clicado, o campo recebe foco automaticamente.


## Exercício 2: Controlando um Cronômetro

### Descrição
Este componente implementa um cronômetro simples que pode ser iniciado, pausado e resetado.

### Código
```js
import React, { useState, useRef } from 'react';

const Timer = () => {
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <p>Tempo decorrido: {seconds} segundos</p>
      <button onClick={startTimer}>Iniciar</button>
      <button onClick={pauseTimer}>Pausar</button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
};

export default Timer;
```

### Explicação
- **`useState`**: Controla o número de segundos e se o cronômetro está rodando.
- **`useRef`**: Armazena a referência ao `setInterval` para controlar o cronômetro.
- **Funções**:
  - `startTimer`: Inicia o cronômetro, aumentando os segundos a cada 1 segundo.
  - `pauseTimer`: Pausa o cronômetro, limpando o intervalo ativo.
  - `resetTimer`: Reseta os segundos para 0 e interrompe o cronômetro.


## Exercício 3: Contexto de Tema

### Descrição
Este componente implementa um sistema de tema claro e escuro. Um componente exibe o tema atual e outro permite alterná-lo.

### Código
```js
import React, { createContext, useContext, useState } from 'react';

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
  return <button onClick={toggleTheme}>Alternar Tema</button>;
};

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
```

### Explicação
- **`createContext()`**: Cria o contexto para armazenar o tema e a função para alterná-lo.
- **`ThemeProvider`**: Envolve os componentes e fornece o estado e a função para alternar o tema.
- **`useContext`**: Permite acessar o estado do tema e a função de alternância nos componentes `ThemeDisplay` e `ThemeSwitcher`.


