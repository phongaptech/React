// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
function App() {
  const products = [
    { id: 1, name: "Iteam 1", price: 1000 },
    { id: 2, name: "Iteam 2", price: 1100 },
    { id: 3, name: "Iteam 3", price: 2000 },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductList products={products}/>}/>
          <Route path='/products/:id' element={<ProductDetail products={products}/>}/>
        </Routes>
      </BrowserRouter>
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
