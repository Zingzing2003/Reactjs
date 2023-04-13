import 'antd/dist/antd.min.css';
import { useState } from 'react';
import {Table,Input,Select} from 'antd';
//import { isParameter } from 'typescript';

function UserTable ( ) {


  const [search,setSearch]= useState('');

  const handleSearch=(value)=>setSearch(value);
   
  const  handleOnchange=(e)=>{
    if( e=== "All group") e='';
    setSearch(e)
  };

  

  const dataSource=[
    {
      key:1,
      foodName:"Name A",
      dob: '1/1/1970',
      address: 100,
      fbGroups:"updating...",
      group:"ban hang",


    },
    {
      key:2,
      foodName:"Name B",
      dob: '1/1/1970',
      address: 100,
      fbGroups:"updating...",
      group:"ban hang",

    },
    {
      key:3,
      foodName:"Name C",
      dob: '1/1/1970',
      address: 100,
      fbGroups:"updating...",
      group:"di choi",

    },
    {
      key:4,
      foodName:"Name D",
      dob: '1/1/1970',
      address: 100,
      fbGroups:"updating...",
      group:"da bong",
    },
  ]
  const columns=[
    {
      title:"Food Name",
      dataIndex:"foodName",
      
    },
    {
      title:"Dob",
      dataIndex:"dob",
    },
    {
      title:"Address",
      dataIndex:"address",
    },
    {
      title:"FB Groups",
      dataIndex:"fbGroups",
    },
    {
      title:"Group",
      dataIndex:"group",
      filteredValue:[search],
      onFilter:(value, record)=>{
        return  String(record.group).toLowerCase().includes(value.toLowerCase());
      },

    },
    
  ]
 
  


    return (

        <div
            // style={{display: 'flex'}}
        >
        <div  style={{display: 'flex'}}>
        <Input.Search
                                    className='search'
                                    placeholder='Type to search...'
                                    style={{ padding: '8', borderRadius: '5px' }}
                                    onSearch={handleSearch}
                            
                                  >
        </Input.Search>
        <Select
                                    
                                    defaultValue="All Group"
                                    onChange={handleOnchange}
                                  
                                  >
                                      <Select.Option value="All group">
                                        All group
                                      </Select.Option >

                                      <Select.Option value="ban hang">
                                        ban hang
                                      </Select.Option >

                                      <Select.Option value="choi game">
                                        choi game
                                      </Select.Option>
                                      
                                      

        </Select>
        </div>
       
        <Table
                                  rowSelection={{
                                    type: 'checkbox',
                                    getCheckboxProps: (record) => (
                                      { name: record.name }
                                    )
                                  }}
                                  dataSource={dataSource}
                                  columns={columns}
                                >

        </Table>
        
        </div>
    )
}
export default UserTable;