import React from 'react';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';


function App() {
  const students = [
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
        <TableCustom rows={students} />
      
    </div>
  );
}

export default App;
