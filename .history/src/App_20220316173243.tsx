import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';


function App() {
  const studentsData = [
    {
      name: 'vietkhiem',
      age: 21,
      address: 'Thái Bình'
    }
  ]
  return (
    <div className="App">
      {/* thêm view login vào trong App.tsx */}
        <Login />
        {/* thêm components table vào app */}
        <TableCustom rows={studentsData} />
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
