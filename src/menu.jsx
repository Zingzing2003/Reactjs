import 'antd/dist/antd.min.css';
import React from 'react';
import {Menu} from 'antd';
import {SettingOutlined,ReloadOutlined,QuestionCircleOutlined , InfoCircleOutlined } from '@ant-design/icons';

function  UserMenu(){
    return (
        
        <Menu
                            mode="inline"
                            items={[
                              { label: "system setting", key: "ss", icon: <SettingOutlined /> },
                              { label: "Peivious Version", key: 'pv', icon: <ReloadOutlined /> },
                              { label: "What's new", key: 'wn', icon: <InfoCircleOutlined /> },
                              { label: "Customers Support", key: 'cs', icon: <QuestionCircleOutlined /> },
                            ]}
                          >

        </Menu>
       
    )
}
export default UserMenu;