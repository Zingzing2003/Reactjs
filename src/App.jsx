
import React from 'react';

import { Tabs, Layout, SiderProps, Content } from 'antd';

import './App.css'
import UserMenu from './menu';
import UserModal from './modal';
import UserTable from './table';


function App() {
  return (
    <>


      <br></br>

      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1 }}>
          <UserModal />
          <div>
            <UserMenu />
          </div>
        </div>
        <div style={{ borderBox: 'dotted', flex: 3, type: 'block' }}>
          <h1>Danh Sách Món Ăn</h1>

          <div >
            <UserTable />
          </div>
        </div>
      </div>





    </>






  )
}

export default App;
