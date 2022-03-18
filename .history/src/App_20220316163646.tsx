import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./pages/student";
import index from './pages/login';
import index from './pages/login';


function App() {
  return (
    <div className="App">
      {/* thêm view login vào trong App.tsx */}
        <index />
        <Student />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
