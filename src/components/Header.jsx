import React from 'react';
import { Tabs } from 'antd';
import { StarFilled, GiftFilled } from '@ant-design/icons'
import Uploader from './Uploader';

const items = [
  {
    key: '1',
    label: 'Placa de Cumple',
    children: <Uploader/>,
    icon: <StarFilled />
  },
  {
    key: '2',
    label: 'Placa de Bienvenida',
    children: <Uploader/>,
    icon: <GiftFilled />,
    disabled: true,
  },
];

const Header = () =>{
  
return(
  <>
    <Tabs defaultActiveKey="1" items={items} />;
  </>
)}
export default Header;