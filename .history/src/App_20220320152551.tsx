import React, {useState} from 'react';
import './App.css';
import Login from './pages/login';
import TableCustom from './pages/table';
import ClientLayout from './pages/layouts/ClientLayout';
import Product from './pages/product/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import AdminHomePage from './pages/adminHomePage';
import HomePage from './pages/homepage';

import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';

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

        <div>
            <div>
              <ul>
                <li><Link to={'/'}>HomePage</Link></li>
                <li><Link to={'/product'}>HomePage</Link></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
        </div>


      {/* cau hinh route */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<HomePage />} />
            <Route path="teams" element={<Product />}>
              <Route path=":teamId" element={<AdminLayout />} />
              <Route path="new" element={<AdminHomePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
