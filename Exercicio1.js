import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null); // Criando a referência usando useRef

  const handleFocus = () => {
    inputRef.current.focus(); // Utilizando useRef para focar no input
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focar Input</button>
    </div>
  );
};

export default FocusInput;
