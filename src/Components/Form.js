import React, { useState } from "react";
import "antd/dist/antd.css";
import moment from "moment";

import { Form, Button, message } from "antd";

import AttendenceForm from "./Modal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

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

  const onCreate = (values) => {
    values = preSubmitHandler(values);
    hideModal();

    const array = JSON.parse(localStorage.getItem("values")) || [];
    array.push(values);
    localStorage.setItem("values", JSON.stringify(array));
    message.success("Attendence Submitted Successfully", 4);
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
      <Button
        block
        style={{ marginTop: 10 }}
        className="mr-1"
        onClick={() => showModal()}
      >
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
}
