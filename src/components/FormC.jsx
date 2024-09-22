
import { Button, Form, Input, Flex, InputNumber } from 'antd';
import { EyeFilled } from '@ant-design/icons'

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const FormC = () => {
  
  
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
        <Input placeholder= 'Nombre' />
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
        placeholder='Día'/>
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
        <Input placeholder= 'Mes' />
      </Form.Item>
    </Flex>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {
          !onFinish
          ?
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
        :
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<EyeFilled />}
          style={{marginRight: '200px'}}
          >
          Previsualizar
        </Button>
        }        
      </Form.Item>
  </Form>
)
};
export default FormC;