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
      
    </div>
  );
}

export default App;
