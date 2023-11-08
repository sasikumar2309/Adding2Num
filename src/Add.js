import"./Add.css"
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  function handleNumber1Change(e) {
    setNumber1(Number(e.target.value));
  }
  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }
  function calculateTotal() {
    setTotal(number1 + number2);
  }
  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleNumber1Change} />
        <input type="number" placeholder="0" onChange={handleNumber2Change} />
      </div>
      <button onClick={calculateTotal}>Concate</button>

      <h3>{total}</h3>
    </div>
  );
}


export default App;