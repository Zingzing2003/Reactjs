import 'antd/dist/antd.min.css';

import { useState, useEffect } from 'react';
import { Table, Input, Select, Space, Button, Modal } from 'antd';
//import { isParameter } from 'typescript';

function UserTable() {



  const [search, setSearch] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [addingFood, setAddingFood] = useState({ id: '', foodName: '', price: '', fbGroup: '', typeFood: '' });
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(function (res) {
        return res.json()
      })
      .then(data => setDataSource(data));
  }, [])


  const handleSearch = (value) => setSearch(value);

  const handleOnchange = (e) => {
    if (e === "All type") e = '';
    setSearch(e)
  };
  const handleEdit = (record) => {
    setIsEditing(true);
    setEditingFood({ ...record })
  }
  const handleDelete = (record) => {
    Modal.confirm({
      title: 'are you sure',
      onOk: () => {
        setDataSource((pre) =>
          pre.filter(food => food.id !== record.id));

      },
      okType: 'danger',

    })
  };
  const onAddFood = () => {
    setIsAdding(true);


  }

  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
  }



  const columns = [
    {
      title: "Food Name",
      dataIndex: "foodName",
      sorter: (a, b) => a - b,
      
    },

    {
      title: "Price",
      dataIndex: "price",
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
        var t = removeVietnameseTones(String(record.typeFood));
        var v = removeVietnameseTones(value);
        return t.toLowerCase().includes(v.toLowerCase());
      },

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <button onClick={() => handleDelete(record)}>Delete</button>
        </Space>

      },
    },

  ]


  return (

    <div
      style={{ position: 'absolute' }}
    >
      {/* Nút thêm food */}
      <Button onClick={onAddFood}
        style={{
          marginLeft: '750px', display: 'block', width: '150px', borderRadius: ' 5px', color: '#ffa465', backgroundColor: '#fbeee5', border: 'none'
        }}>+ Thêm Món Ăn
      </Button>

      <div style={{ display: 'flex' }}>
        {/* Search food */}
        <Input.Search
          className='search'
          placeholder='Type to search...'
          style={{ padding: '8', borderRadius: '25px' }}
          onSearch={handleSearch}

        >
        </Input.Search>
        {/* Chọn food lọc food theo nhóm loại */}
        <Select
          className='select'
          defaultValue="All Type"
          onChange={handleOnchange}

        >
          <Select.Option value="All type">
            All Type
          </Select.Option >

          <Select.Option value="Ăn Vặt">
            Ăn Vặt
          </Select.Option >

          <Select.Option value="Ăn Sáng">
            Ăn Sáng
          </Select.Option>
          <Select.Option value="Ăn Trưa">
            Ăn Trưa
          </Select.Option>



        </Select>

      </div>
      {/* Bảng food all */}
      <Table
        rowSelection={{
          type: 'checkbox',
          getCheckboxProps: (record) => (
            { name: record.foodName }
          )
        }}
        dataSource={dataSource}
        columns={columns}
        scroll={{
          y: 300,
        }}
      >

      </Table>
      <Modal
        title="Edit Food"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          setIsEditing(false);
        }}
        onOk={() => {
          setDataSource(pre => {
            return pre.map((food) => {
              if (food.id === editingFood.id) {
                return editingFood;
              }
              else return food;
            })
          })
          setIsEditing(false);
        }}

      >
        <Input value={editingFood?.foodName} onChange={(e) => {
          setEditingFood(pre => {
            return { ...pre, foodName: e.target.value }
          })
        }} />
        <Input value={editingFood?.price} onChange={(e) => {
          setEditingFood(pre => {
            return { ...pre, price: e.target.value }
          })
        }} />
        <Input value={editingFood?.typeFood} onChange={(e) => {
          setEditingFood(pre => {
            return { ...pre, typeFood: e.target.value }
          })
        }} />
      </Modal>
      <Modal
        title="Add Food"
        visible={isAdding}
        okText='Add'
        onCancel={() => setIsAdding(false)}
        onOk={() => {
          setDataSource(pre => {
            return [...pre, addingFood]
          })
          setIsAdding(false);
          setAddingFood({ id: '', foodName: '', price: '', fbGroup: '', typeFood: '' });

        }}


      >
        <span> Food Name</span>
        <Input value={addingFood?.foodName} onChange={(e) => {
          setAddingFood(pre => {
            return { ...pre, foodName: e.target.value }
          })
        }} />
        <span> Price</span>
        <Input value={addingFood?.price} onChange={(e) => {
          setAddingFood(pre => {
            return { ...pre, price: e.target.value }
          })
        }} />
        <span> Fb Groups</span>
        <Input value={addingFood?.fbGroups} onChange={(e) => {
          setAddingFood(pre => {
            return { ...pre, fbGroups: e.target.value }
          })
        }} />
        <span> Type Food</span>
        <Input value={addingFood?.typeFood} onChange={(e) => {
          setAddingFood(pre => {
            return { ...pre, typeFood: e.target.value }
          })
        }} />

      </Modal>

    </div >
  )
}
export default UserTable;