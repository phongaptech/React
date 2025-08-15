// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import Names from './components/Names';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/homework1">Bài 1</Link>
        <Link to="/homework2">Bài 2</Link>
      </nav>
      <Routes>
        <Route path="/homework1" element={<UserInfo name="Thành" age={22} />} />
        <Route path="/homework2" element={<Names />} />
      </Routes>
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
