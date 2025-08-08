// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [userName] = useState('Nam');
  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Component Cha</h1>
      <p>User name: {userName}</p>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+</button>
      <Child count={count} userName={userName} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
