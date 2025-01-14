import React, { useState, useRef } from 'react';

const Timer = () => {
  const intervalRef = useRef(null); // Referência para armazenar o setInterval
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
