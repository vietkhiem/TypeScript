import React, {useState} from 'react';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';


function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  //state trang thai hien thi bang
  const [isShowTable, setShowTable] = useState<boolean>(true);
  const studentsData = [
    {
      name: 'vietkhiem',
      age: 21,
      address: 'Thái Bình',
      email: 'Vietkhiemdz@gmail.com',
      action: 'Delete'
    },
    {
      name: 'vietkhiem12',
      age: 22,
      address: 'Hà Nội',
      email: 'Vietkhiemdzz@gmail.com',
      action: 'Delete'
    },
    {
      name: 'LinhLynnn',
      age: 21,
      address: 'Thái Bình',
      email: 'Vietkhiemdzzz@gmail.com',
      action: 'Delete'
    }
  ]
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Update Count</button>
        <p>{count}</p>
      <button onClick={() => setName('viet khiem')}>Update Name</button>
        <p>Name: {name}</p>
      {/* thêm view login vào trong App.tsx */}
        <Login />
        {/* thêm components table vào app */}
        {
          ?:
        }
        <TableCustom rows={studentsData} />
      
    </div>
  );
}

export default App;
