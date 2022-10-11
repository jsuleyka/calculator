import './App.css';
import FCCLogo from './components/FCCLogo';
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };

  //validar un solo operador
  // console.log(setInput);

  // if (setInput.toString().includes('+')) {
  //   console.log(setInput);
  // }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input) % 1 === 0 ? evaluate(input).toFixed(0) : evaluate(input).toFixed(2));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.');
    }
  };

  return (
    <div className="App">
      <FCCLogo />

      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear manageClear={() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
