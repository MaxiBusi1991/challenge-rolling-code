
import { Button, Form, Input, Flex, InputNumber } from 'antd';
import { EyeFilled } from '@ant-design/icons'
import { useState } from 'react';



const FormC = () => {
  
  const [inputValues, setInputValues] = useState({
    name: '',
    day: '',
    month: ''
  });



  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const allInputsFilled = Object.values(inputValues).every(value => value.trim() !== '');

  return (
  <Form
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
    autoComplete="off"
  >
    <Flex align="center" style={{marginTop: '30px'}}>     
      <Form.Item
        style={{marginLeft: '70px'}}
        name="name"
        rules={[
          {
            required: true,
            message: 'Campo incompleto!',
          },
          {
            max: 10,
            message: "No puedes superar los 10 caracteres!",
          },
        ]}
        
      >
        <Input
        placeholder= 'Nombre'
        onChange={handleInputChange}
        />
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
        <InputNumber
        min={1}
        max={31}
        name='day'
        placeholder='Día'
        onChange={handleInputChange}
        />
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
            message: "No puedes superar los 10 caracteres!",
          },
        ]}
      >
        <Input
        placeholder= 'Mes'
        onChange={handleInputChange}
        />
      </Form.Item>
    </Flex>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {
          allInputsFilled
          ?
          <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<EyeFilled />}
          style={{marginRight: '200px'}}
          
          >
          Previsualizar
        </Button>
        :
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<EyeFilled />}
          style={{marginRight: '200px'}}
          disabled
          >
          Previsualizar
        </Button>
        }        
      </Form.Item>
  </Form>
  // todo: hacer que funcione el disabled en todos los campos
)
};
export default FormC;