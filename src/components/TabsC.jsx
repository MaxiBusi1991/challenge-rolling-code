import React from 'react';
import { Tabs } from 'antd';
import { StarFilled, GiftFilled } from '@ant-design/icons'
import UploadC from './UploadC';

const items = [
  {
    key: '1',
    label: 'Placa de Cumple',
    children: <UploadC/>,
    icon: <StarFilled />
  },
  {
    key: '2',
    label: 'Placa de Bienvenida',
    children: <UploadC/>,
    icon: <GiftFilled />,
    disabled: true,
  },
];

const TabsC = () =>{
  
return(
  <>
    <Tabs defaultActiveKey="1" items={items} />;
  </>
)}
export default TabsC;