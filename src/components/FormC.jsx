import { Button, Form, Input, Flex, InputNumber, Modal } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import { useState } from 'react';

const FormC = () => {


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

  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [nameData, setNameData] = useState('');
  const [dayData, setDayData] = useState('');
  const [monthData, setMonthData] = useState('');

  const onValuesChange = (_, allValues) => {
    const { name, day, month } = allValues;
    if (name && day && month) {
      setIsButtonDisabled(false);
      setNameData(name);
      setDayData(day);
      setMonthData(month)
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
    <>
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      autoComplete="off"
    >
      <Flex align="center" style={{ marginTop: '30px' }}>
        <Form.Item
          style={{ marginLeft: '70px' }}
          name="name"
          rules={[
            {
              required: true,
              message: 'Campo incompleto!',
            },
            {
              max: 10,
              message: 'No puedes superar los 10 caracteres!',
            },
          ]}
        >
          <Input placeholder="Nombre" />
        </Form.Item>
        <Form.Item
          name="day"
          rules={[
            {
              required: true,
              message: 'Campo incompleto!!',
            },
          ]}
        >
          <InputNumber min={1} max={31} placeholder="Día" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[
            {
              required: true,
              message: 'Campo incompleto!',
            },
            {
              max: 15,
              message: 'No puedes superar los 15 caracteres!',
            },
          ]}
        >
          <Input placeholder="Mes" />
        </Form.Item>
      </Flex>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<EyeFilled />}
          style={{ marginRight: '200px' }}
          disabled={isButtonDisabled}
          onClick={showModal}
        >
          Previsualizar
        </Button>
      </Form.Item>
    </Form>

    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>{nameData}</p>
    <p>{dayData}</p>
    <p>{monthData}</p>
    {/* <img
      src={previewUrl}
      alt="Vista previa"
      style={{ width: '300px', marginTop: '10px' }}
    /> */}
    </Modal>
  </>  
  );
};

export default FormC;
