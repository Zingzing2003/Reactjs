import 'antd/dist/antd.min.css';
import { useState } from 'react';
import { Modal, Button, Table, Input } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

function UserModal({ newData }) {


  const [isMoldalOpen, setIsMoldalOpen] = useState(false);
  const showModal = () => {
    setIsMoldalOpen(true);
  }
  const handleOk = () => {
    setIsMoldalOpen(false);
  }
  const handleCancel = () => {
    setIsMoldalOpen(false);
  }


  const columns2 = [
    {
      title: "N.O",
      dataIndex: 'stt',
      // filteredValue:[search],
      // onFilter:(value, record)=>{
      //   return  String(record.name).toLowerCase().includes(value.toLowerCase());
      // },

    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Group",
      dataIndex: "group",
    },
    {
      title: "Tong So",
      dataIndex: "tong",
    },
    {
      title: "Ngay",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
    },

  ]

  const [data, setData] = useState([
    {
      stt: '',
      id: '',
      group: '',
      tong: '',
      date: '',
      action: '',
    }
  ]);

  // const handleClick = (data)
  const handleSearch2 = (value) => setData({
    vstt: '',
    id: '',
    group: { value },
    tong: '',
    date: '',
    action: ''
  });
  //console.log(data);

  return (
    <>
      <Button type='primary' style={{ margin: '20px', borderRadius: "25px" }} onClick={showModal}
        // icon={<UsergroupAddOutlined />}
      >
        + Add Food
      </Button>



      <Modal
        open={isMoldalOpen}
        onOk={handleOk}
        onCancel={handleCancel}

      >

        <Table
          // dataSource={dataSource}
          columns={columns2}
          dataSource={data}
        >

        </Table>
        <Input.Search
          style={{ padding: '8' }}
          onSearch={handleSearch2}
        >
        </Input.Search>
        <Button style={{ borderRadius: '5px' }} >
          Add
        </Button>

      </Modal>
    </>
  )
}
export default UserModal;