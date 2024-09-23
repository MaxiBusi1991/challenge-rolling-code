// import React from 'react';
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import { Flex } from "antd";


// const { Dragger } = Upload;
// const props = {
//   maxCount: 1,
//   name: 'file',
//   multiple: false,
//   action: 'http://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} Archivo subido con éxito.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} Upps ha ocurrido un error.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };
  

// const UploadC = () => (
//   <Flex align="center" vertical>
//     <Dragger style={{marginTop: '25%'}} {...props}>
//       <p className="ant-upload-drag-icon">
//         <InboxOutlined />
//       </p>
//       <p className="ant-upload-text">Arrastra la Foto de la persona aquí</p>
//       <p className="ant-upload-hint">
//         Se puede utilizar una unica imagen a la vez
//       </p>
//     </Dragger>
//     {info.file.name && 'hola'}
//   </Flex>
// );
// export default UploadC;

import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Flex } from 'antd';
import FormC from './FormC';
const { Dragger } = Upload;

const UploadC = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const props = {
    maxCount: 1,
    name: 'file',
    multiple: false,
    beforeUpload: (file) => {
      // Verifica si el archivo es una imagen
      if (file.type.startsWith('image/')) {
        // Crea la URL para la vista previa
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        message.error('El archivo seleccionado no es una imagen.');
        return false; // Cancela la subida si no es una imagen
      }
      setFile(file);
      return false; // Cancela la subida automática
    },
    onRemove: () => {
      // Limpia el estado del archivo y la URL de vista previa
      setFile(null);
      setPreviewUrl(null);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Flex align="center" vertical>
      <Dragger style={{ marginTop: '15%' }} {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Arrastra la Foto de la persona aquí</p>
        <p className="ant-upload-hint">
          Se utiliza una unica imagen a la vez
        </p>
      </Dragger>
      {file && (
        <div style={{ marginTop: '20px' }}>
          <p>Archivo seleccionado: {file.name}</p>
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Vista previa"
              style={{ width: '300px', marginTop: '10px' }}
            />
          )}
        </div>
      )}
      {file ? <FormC /> : <p style={{ marginTop: '25px' }}>Aún no has seleccionado nada</p>}
    </Flex>
  );
};

export default UploadC;
