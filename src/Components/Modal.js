import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import "antd/dist/antd.css";

import { Form, Input, Modal, Radio } from "antd";

const AttendenceForm = ({ visible, onCreate, onCancel, editMode, data }) => {
  const [form] = Form.useForm();
  const date = new Date();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [editMode, data]);

  return (
    <Modal
      visible={visible}
      title="Employee Attendence Form"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter username" }]}
        >
          <Input placeholder="Enter Username" disabled={editMode} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input
            placeholder="Enter Password"
            type="password"
            disabled={editMode}
          />
        </Form.Item>

        <Form.Item label="Attendence" name="attendence">
          <Radio.Group>
            <Radio value="check-in">Check In</Radio>
            <Radio
              value="check-out"
              disabled={data ? isEmpty(data?.checkin_time) : true}
            >
              Check Out
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Remarks" name="remarks">
          <Input.TextArea placeholder="Remarks" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AttendenceForm;
