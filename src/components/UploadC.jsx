import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Flex } from "antd";


const { Dragger } = Upload;
const props = {
  maxCount: 1,
  name: 'file',
  multiple: false,
  action: 'http://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} Archivo subido con éxito.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} Upps ha ocurrido un error.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
  

const UploadC = () => (
  <Flex align="center" vertical>
    <Dragger style={{marginTop: '25%'}} {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Arrastra la Foto de la persona aquí</p>
      <p className="ant-upload-hint">
        Se puede utilizar una unica imagen a la vez
      </p>
    </Dragger>
    {info.file.name && 'hola'}
  </Flex>
);
export default UploadC;