import React from 'react'
import './App.css';
import "antd/dist/antd.css";
import { Form, Button, Input, Select, DatePicker} from 'antd';

export default function App() {
  const { Option } = Select;
	return (
		<div style={{
			display: 'block', width: 700, padding: 30, margin: '50px auto',borderRadius: 20, border : '1px solid'
		}}>
			<h3 style ={{textAlign: 'center', color: '#1890ff', fontSize:25}}>Employee Form</h3>
			<Form
				name="employeeform"
				onFinishFailed={() => alert('Failed to submit')}
				onFinish={() => alert('Form Submitted')}
				initialValues={{ remember: true }}
        labelCol={{span:4}}
        wrapperCol={{span:20}}
        labelAlign='left'
			>
			<Form.Item
			label="First Name"
			name="First Name"
			rules={[{ required: true, message: 'Please enter first name' }]}
			>
			<Input placeholder="Enter first name" />
			</Form.Item>
      <Form.Item
			label="Last Name"
			name="Last Name"
			rules={[{ required: true, message: 'Please enter last name' }]}
			>
			<Input placeholder="Enter last name"/>
			</Form.Item>
  
    
      <Form.Item
     	label="Email Address"
			name="Email"
			rules={[{ required: true, message: 'Please enter valid email ' }]}
			>
    
			<Input  placeholder="Enter email address"/>
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
                  <Option value="PSudurpashchim">Sudurpashchim Pradesh</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'city']}
            noStyle
            rules={[{ required: true, message: 'City is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder="Enter city" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="Start Date"
      name="Start Date"
			rules={[{ required: true, message: 'Please slect your start date.' }]}>
          <DatePicker />
        </Form.Item>
      
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
