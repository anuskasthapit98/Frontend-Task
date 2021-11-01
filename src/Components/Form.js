import React from 'react'
import "antd/dist/antd.css";

import { Form, Button, Input, Select, DatePicker, Row, Col} from 'antd';


export default function App() {
 

  const { Option } = Select;
  const onFinish = (values) =>{
  
    const array = JSON.parse(localStorage.getItem('values')) || [];
    array.push(values);
    // console.log(array);
    console.log(localStorage.setItem('values', JSON.stringify(array)));
  };

  const onFinishFailed = () =>{
    console.log('Failed')
  };


  
	return (
		<div style={{
			display: 'block', width: 700, padding: 30, margin: '50px auto',borderRadius: 20, border : '1px solid'
		}}>
			<h3 style ={{textAlign: 'center', color: '#1890ff', fontSize:25}}>Employee Form</h3>
			<Form
				name="employeeform"
				onFinishFailed={onFinishFailed}
				onFinish={onFinish}
				initialValues={{ remember: true }}
        labelCol={{span:4}}
        wrapperCol={{span:20}}
        labelAlign='left'
			>
			<Form.Item
			label="First Name"
			name="FirstName"
			rules={[{ required: true, message: 'Please enter first name', min:3},
      
      {
        pattern:/^[a-zA-Z_ ]*$/,
        message: 'Name should only contain alphabets',
    }
    ]}
			>
			<Input placeholder="Enter first name" />
			</Form.Item>
      <Form.Item
			label="Last Name"
			name="LastName"
			rules={[{ required: true, message: 'Please enter last name', min:3},
    
      {
        pattern:/^[a-zA-Z_ ]*$/,
        message: 'Name should only contain alphabets',
    }
    ]}
			>
			<Input  placeholder="Enter last name"/>
			</Form.Item>
  
    
      <Form.Item
     	label="Email Address"
			name="Email"
			rules={[
        { required: true, message: 'Please enter email ' },
      {
        pattern: /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@citytech([\.])global/,
        message: 'Please enter a valid email with @ and .com',
    }]}
			>
    
			<Input placeholder="Enter email address"/>
			</Form.Item>
 
      <Form.Item 
      label = 'Gender'
      name="Gender"
			rules={[{ required: true, message: 'Please select a gender ' }]}
      >
          <Select placeholder="Select gender">
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            <Select.Option value="Others">Others</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
            <Option value="Province 1">Province No. 1</Option>
                  <Option value="Province 2">Province No. 2</Option>
                  <Option value="Province 3">Province No. 3</Option>
                  <Option value="Gandaki">Gandaki Pradesh</Option>
                  <Option value="Province 5">Province No. 5</Option>
                  <Option value="Karnali">Karnali Pradesh</Option>
                  <Option value="Sudurpashchim">Sudurpashchim Pradesh</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'City']}
            noStyle
            rules={[{ required: true, message: 'City is required' }]}
          >
            <Input style={{ width: '35%' }} placeholder="Enter city" 
            />
          </Form.Item>
          <Form.Item
            name={['address', 'Zip']}
            noStyle
            rules={[{ required: true, message: 'Zip is required', },
            {pattern:  /^[0-9]+$/, message: 'Enter valid Zip code'}]}

          >
            <Input style={{ width: '36%' }} placeholder="Enter Zip code"  />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Row>
 <Col span={12}>
      <Form.Item label="Start Date"
      name="StartDate"
      labelCol = {{span :8}}
      wrapperCol = {{span: 16}}
			rules={[{ required: true, message: 'Please slect your start date.' }]}>
          <DatePicker />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
        name="phone"
        label="Phone Number"
        labelCol = {{span :10}}
        wrapperCol = {{span: 14}}
        
        rules={[{ required: true, message: 'Please input your phone number!' },
        { pattern:  /^[0-9]+$/,message: 'Enter valid Phone number' }
      ]}
      >
        <Input style={{ width: '100%' }} 
                maxLength="10" />
      </Form.Item>
        </Col>
</Row>

        <Form.Item
        label="Designation"
            name='Designation'
    
            rules={[{ required: true, message: 'Designation is required' }]}
          >
            <Select placeholder="Select designation">
            <Option value="Senior">Senior</Option>
            <Option value="Junior">Junior</Option>
            <Option value="Intern">Intern</Option>
            </Select>
          </Form.Item>
			<Form.Item>
			<Button type="primary" htmlType="submit">
			Submit 
			</Button>
			</Form.Item>

			</Form>
     
 

		</div>
    

      



	);
}



