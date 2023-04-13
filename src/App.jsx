
import React from 'react';

import {  Tabs} from 'antd';

import './App.css'
import UserMenu from './menu';
import UserModal from './modal';
import UserTable from './table';


function App() {
  return (      
     <>
     
      <br></br>
    
      <Tabs
        
          defaultActiveKey="1"
          type="card"
          centered
          
          //onChange={onChange}
          items={[
            {
              
              label: `Account Management`,
              key: '1',
              children: (
                 <div style={{padding:'20px',display:'flex', justifyContent:'space-around' }}>
                        <div style={{flex:1}}>
                          <UserModal/>
                          <div>
                           <UserMenu/>
                          </div>
                        </div>
                  
                          <div style={{ borderBox: 'dotted', flex: 3, type:'block' }}>                               
                            <UserTable/>                                                                                                                  
                          </div>
                  </div>
                ),
            },
            {
              label: `Action Setting`,
              key: '2',
              children: `Content of Tab Pane 2`,
            },
            {
              label: `Runner Setting`,
              key: '3',
              children: `Content of Tab Pane 3`,
            },
            {
              label: `Runner Setting`,
              key: '4',
              children: `Content of Tab Pane 3`,
            },
          ]} />
     
    </>
    
                 
       
        

    
  )
}

export default App;
