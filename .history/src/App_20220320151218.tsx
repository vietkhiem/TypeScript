import React, {useState} from 'react';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';

import {Routes, Route} from 'react-router-dom';

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

        <button>Add Students</button>
      {/* thêm view login vào trong App.tsx */}
        <Login />
        {/* thêm components table vào app */}
        {
          isShowTable === true
        ? <TableCustom rows={studentsData} />
        :null
        }
      {/* cau hinh route */}
        <Routes>
          <Route path= '/' element={<ClientLayout />}>
              <Route index element={<Homepage />} />
              <Route path='product' element={<Product />}>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
