import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Flex } from 'antd';
import FormC from './FormC';
const { Dragger } = Upload;

const UploadC = () => {
  const [file, setFile] = useState(null);

  const props = {
    maxCount: 1,
    name: 'file',
    multiple: false,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        setFile(info.file);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Flex align="center" vertical>   
      <Dragger style={{marginTop: '15%'}} {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
      {file && <div style={{marginTop: '20px'}}>Archivo seleccionado: {file.name}</div>}
      {file ? <FormC/> : <p style={{marginTop: '25px'}}>Aún no has seleccionado nada</p>}
    </Flex>
  );
};

export default UploadC;
