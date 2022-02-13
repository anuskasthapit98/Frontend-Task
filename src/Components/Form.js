import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import moment from "moment";

import { Form, Button, message, Input } from "antd";

import AttendenceForm from "./Modal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [logged, setLogged] = useState([]);
  const history = useHistory();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const preSubmitHandler = (res) => {
    res.current_date = new Date();
    res.checkin_time = res?.attendence === "check-in" ? new Date() : null;
    res.checkout_time = res?.attendence === "check-out" ? new Date() : null;

    return res;
  };

  const onFinish = (values) => {
    const array = JSON.parse(localStorage.getItem("login")) || [];
    array.push(values);
    localStorage.setItem("login", JSON.stringify(array));
    history.push({
      pathname: "/list",
      state: {
        login: values,
      },
    });
    message.success("Login Successful", 4);
  };

  const onCreate = (values) => {
    values = preSubmitHandler(values);
    const array = JSON.parse(localStorage.getItem("values")) || [];
    array.push(values);
    localStorage.setItem("values", JSON.stringify(array));
    message.success("Attendence Submitted Successfully", 4);
    hideModal();
  };

  const [form] = Form.useForm();

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
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter username" }]}
        >
          <Input placeholder="Enter Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input placeholder="Enter Password" type="password" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>

      <Button block className="mr-1" onClick={() => showModal()}>
        Submit Attendence
      </Button>
      <AttendenceForm
        visible={modalVisible}
        onCreate={onCreate}
        onCancel={() => {
          hideModal();
        }}
      />
    </div>
  );
};

export default App;
