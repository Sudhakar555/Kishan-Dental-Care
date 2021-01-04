import React,{useState} from 'react'
import { PageHeader,Collapse, Row, Col,Form, Input, InputNumber, Button,DatePicker , Select ,Drawer,Modal} from 'antd';
import '../../Styles/index.css'
import { CaretRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

const { Panel } = Collapse;
const { Option } = Select;




 export default function Home() {

    const [visible, setvisible] = useState(false)
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
     
      const config = {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select Date!',
          },
        ],
      };
      
      const handleChange = (value) =>{
        console.log(value);
        
      }
     
        const onFinish = (fieldsValue) => {
            const values = {
                ...fieldsValue,
                'date': fieldsValue['date'].format('YYYY-MM-DD'),
               };
            
    
          console.log(values);
        };
    
        const onChange = (date, dateString) => {
            console.log(date, dateString);
        }
    
          const showModal = () => {
           setvisible(true)
          };
        
         const onClose = () => {
           setvisible(false)
          };
        
    
        

    return(
        <div className="App">
            <PageHeader
    
    
    title="Patient Management"
    
  />
  <Row>
      <Col span={24}>

    

      <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
    style={{marginTop:'50px'}}
  >
    <Panel header="Add patient" key="1" className="site-collapse-custom-panel">
    <Form {...layout}
     name="nest-messages"
      onFinish={onFinish}
       
             initialValues={{
        remember: true,
      }}>
                 <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: 'Please input Date',
          },
        ]}
        {...config}
      >
        <DatePicker onChange={onChange} />
      </Form.Item>

            <Form.Item
        label="patient Id"
        name="id"
        rules={[
          {
            required: true,
            message: 'Please input patient Id!',
            
          },
          
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input user name',
            
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
       label="Gender"
       name="gender"
       
       rules={[
         {
           required: true,
           message: 'Please input the gender!',
         },
       ]}
      >        
      <Select
      labelInValue
      placeholder="Select a Gender"
      style={{ width: 150 }}
      onChange={handleChange}
    >
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
      <Option value="other">Other</Option>
    </Select>
      </Form.Item>

      <Form.Item
        label="Contact"
        name="contact"
        rules={[
          {
            required: true,
            message: 'Please input contact number!',
            
          },
         
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input address!',
            
          },
          
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      
     
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  
    </Panel>
    <Panel header="Search Patient" key="2" className="site-collapse-custom-panel">
      <p>Defsult</p>
    </Panel>
    <Panel header="Delete a Patient" key="3" className="site-collapse-custom-panel">
      <p>Default</p>
    </Panel>
  </Collapse>

   

      </Col>
    </Row>
 
        </div>
    )
} 





