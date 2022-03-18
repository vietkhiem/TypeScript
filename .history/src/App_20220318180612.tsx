import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';

type Student = {
  name: string,
  age: number,
  address: string,
  phone: number
}

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
    }
  ]
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Update Count</button>
        <p>{count}</p>

      <button onClick={() => setName('viet khiem')}>Update Name</button>
        <p>Name: {name}</p>

        <button onClick={() => setShowTable(!isShowTable)}>
        {isShowTable === true ? 'Ẩn' : 'Hiện'}  table</button>

        <button onClick={() => setStudent()}>Add Students</button>
      {/* thêm view login vào trong App.tsx */}
        <Login />
        {/* thêm components table vào app */}
        {
          isShowTable === true
        ? <TableCustom rows={studentsData} />
        :null
        }
      
    </div>
  );
}

export default App;
