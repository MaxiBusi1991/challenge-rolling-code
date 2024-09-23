import { useState, useRef } from 'react';
import { InboxOutlined, EyeFilled } from '@ant-design/icons';
import { message, Upload, Flex, Button, Modal } from 'antd';
import templateImage from '../assets/template_birthday.png'; // Importa la imagen de la plantilla
import FormC from './FormC';
const { Dragger } = Upload;

const UploadC = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const canvasRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const props = {
    maxCount: 1,
    name: 'file',
    multiple: false,
    beforeUpload: (file) => {
      // Verifica si el archivo es una imagen
      if (file.type.startsWith('image/')) {
        const objectUrl = URL.createObjectURL(file); // genera una url de la img sin necesidad de que se suba a un servidor
        console.log('Objeto URL generado:', objectUrl); // Verificar URL
        setPreviewUrl(objectUrl);
        setFile(file);
      } else {
        message.error('El archivo seleccionado no es una imagen.');
        return false;
      }
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

  const [imageFinished, setImageFinished] = useState({})

  const combineImages = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const userImage = new Image();
    const templateImg = new Image();

    // Asignar primero el evento onload
    userImage.onload = () => {
      console.log('Imagen del usuario cargada'); // Debug
      templateImg.onload = () => {
        console.log('Imagen de plantilla cargada'); // Debug

        // Ajustar el tamaño del canvas al de la plantilla
        canvas.width = templateImg.width;
        canvas.height = templateImg.height;

        // Dibujar primero la plantilla
        ctx.drawImage(templateImg, 0, 0);

        // Dibujar la imagen del usuario encima (ajusta la posición y tamaño)
        ctx.drawImage(userImage, 695, 980, 575, 400);

        // Agregar el texto al canvas
        ctx.font = '35px Arial';
        ctx.fillStyle = 'white'; // Color del texto
        ctx.fillText('var i = 0, age = getAge();', 480, 500);
        ctx.fillText('while(true) {', 480, 530);
        ctx.fillText('  if (i === age) {', 480, 560);
        ctx.fillText('    alert("¡Happy birthday dude!");', 480, 590);
        ctx.fillText('  } else {', 480, 620);
        ctx.fillText('    i++;', 480, 650);
        ctx.fillText('  }', 480, 680);
        ctx.fillText('}', 480, 710);

        // Habilitar el botón de descarga
        message.success('Imágenes combinadas con éxito. Ahora puedes descargar.');
      };

      // Asignar el src de la plantilla
      templateImg.src = templateImage;
    };

    // Asignar el src de la imagen del usuario después de asignar onload
    userImage.src = previewUrl;
  };
  
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'imagen-combinada.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    setImageFinished(link)
    console.log(imageFinished)
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
            <Flex align='center' vertical>
              <img
                src={previewUrl}
                alt={file.name}
                style={{ width: '300px', marginTop: '10px' }}
              />
              <Button onClick={combineImages} style={{ marginTop: '10px' }}>
                  Combinar con plantilla y texto
                </Button>
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <Button onClick={downloadImage} style={{ marginTop: '10px' }}>
                  Descargar imagen combinada
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                icon={<EyeFilled />}
                style={{ marginTop: '15px' }}
                // disabled={isButtonDisabled}
                onClick={showModal}
              >
                Previsualizar
              </Button>
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <img
                  src={imageFinished}
                  alt='image-preview'
                  style={{width: '400px'}}
                />
              </Modal>
            </Flex>
          )}
        </div>
      )}
      {file ? <FormC /> : <p style={{ marginTop: '25px' }}>Aún no has seleccionado nada</p>}
    </Flex>
  );
};

export default UploadC;
