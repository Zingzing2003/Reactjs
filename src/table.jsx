import 'antd/dist/antd.min.css';
import { useState } from 'react';
import { Table, Input, Select, Space, Button } from 'antd';
//import { isParameter } from 'typescript';

function UserTable() {


  const [search, setSearch] = useState('');

  const handleSearch = (value) => setSearch(value);

  const handleOnchange = (e) => {
    if (e === "All group") e = '';
    //console.log(e);
    setSearch(e)
  };


  const [dataSource, setDataSource] = useState([]);
  fetch("http://localhost:3000/data")
    .then(function (res) {
      return res.json()
    })
    .then(data => setDataSource(data));



  const columns = [
    {
      title: "Food Name",
      dataIndex: "foodName",
      sorter: (a, b) => a - b,
    },
    {
      title: "Dob",
      dataIndex: "dob",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "FB Groups",
      dataIndex: "fbGroups",
    },
    {
      title: "Type Food",
      dataIndex: "typeFood",
      filteredValue: [search],
      onFilter: (value, record) => {
        return String(record.typeFood).toLowerCase().includes(value.toLowerCase());
      },

    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => {
        return <Space size="middle">
          <Button onClick={handleEdit}>Edit</Button>
          <button onClick={handleDelete}>Delete</button>
        </Space>

      },
    },

  ]


  const handleEdit = (record) => {

  }
  const handleDelete = (record) => {
    console.log(record);
    // return console.log(record);
  };
  const onAddFood = () => {

    // setDataSource(pre=>{
    //   return [...pre, newFood]
    // })
  }
  return (

    <div
    // style={{display: 'flex'}}
    >
      <Button onClick={onAddFood} style={{ margin: 'auto', display: 'block', width: '150px' }}>Thêm Món Ăn</Button>

      <div style={{ display: 'flex' }}>

        <Input.Search
          className='search'
          placeholder='Type to search...'
          style={{ padding: '8', borderRadius: '25px' }}
          onSearch={handleSearch}

        >
        </Input.Search>
        <Select
          className='select'
          defaultValue="All Type"
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