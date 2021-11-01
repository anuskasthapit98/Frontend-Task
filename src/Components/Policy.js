import React from "react";
import '../App.css'
import "antd/dist/antd.css";
import { Form, Button, InputNumber } from "antd";

export default function Policy() {
  const onFinish = () => {
    console.log("Success");
  };
  const onFinishFailed = () => {
    console.log("Failed");
  };
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
        margin: "50px auto",
        borderRadius: 20,
        border: "1px solid",
      }}
    >
      <Form
        name="PolicyForm"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        labelAlign="left"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <Form.Item
          label="Minimum length"
          name="MinLen"
          initialValue="6"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} maxLength={2} />
        </Form.Item>
        <Form.Item
          label="Maximum Length"
          name="MaxLen"
          initialValue="25"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} maxLength={2} />
        </Form.Item>
        <Form.Item
          label="Maximum Uppercase"
          name="MaxUp"
          initialValue="1"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Mininum Lowercase"
          name="MinLow"
          initialValue="1"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} maxLength={2} />
        </Form.Item>
        <Form.Item
          label="Minimun Numbers"
          name="MinNum"
          initialValue="1"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Minimum Characters"
          name="MinChar"
          initialValue="1"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} maxLength={2} />
        </Form.Item>
        <Form.Item
          label="Password Policy"
          name="Password"
          initialValue="7"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              min: 1,
              type: "number",
              message: "value must be greater than 0",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            addonAfter={<span className="password-span-label ml-1">days</span>}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
