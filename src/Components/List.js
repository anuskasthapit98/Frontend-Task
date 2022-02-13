import { Table, Tooltip, Modal, message, Button, Form, Tag } from "antd";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";
import { EditOutlined, DisconnectOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import AttendenceForm from "./Modal";

const List = () => {
  const location = useLocation();
  const [loading, setLoading] = useState("false");
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();
  const [data, setData] = useState([]);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  function removeData(record) {
    Modal.error({
      title: "Remove this record from the list",
      onOk: async () => {
        try {
          const array = JSON.parse(localStorage.getItem("values")) || [];
          array.pop(record);
          localStorage.setItem("values", JSON.stringify(array));
          message.success("Record successfully removed");
          setLoading(true);
        } catch (error) {
          message.error("Error removing record ");
        }
      },
      closable: true,
      cancelText: "Cancel",
      onCancel: () => {},
    });
  }

  const columns = [
    {
      title: "user",
      dataIndex: "username",
    },
    {
      title: "Date",
      render: (record, type) => {
        return moment(record.current_date).format("YYYY-MM-DD");
      },
    },
    {
      title: "Check-In Time",
      render: (record, type) => {
        return record.checkin_time
          ? moment(record.checkin_time).format("h:mm:ss a")
          : "-";
      },
    },
    {
      title: "Check-Out Time",
      render: (record, type) => {
        return record.checkout_time
          ? moment(record.checkout_time).format("h:mm:ss a")
          : "-";
      },
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
    },
    {
      title: "Status",
      render: (record, type) => {
        if (record.checkin_time && record.checkout_time) {
          return <Tag color={"green"}>Present</Tag>;
        }
        if (!record.checkin_time && !record.checkout_time)
          return <Tag color={"red"}>Absent</Tag>;
        return <Tag color={"yellow"}>Missed</Tag>;
      },
    },

    {
      title: "Actions",
      align: "center",

      render: (text, record, index) => {
        return (
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <Tooltip title="Edit">
              <EditOutlined
                onClick={() => {
                  showModal();
                  setEditMode(true);
                  setData(record);
                }}
                style={{ fontSize: "1.5em", color: "blue", cursor: "pointer" }}
              />
            </Tooltip>
            <Tooltip title="Remove">
              <DisconnectOutlined
                onClick={() => {
                  removeData(record);
                }}
                style={{ fontSize: "1.5em", color: "blue", cursor: "pointer" }}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];
  console.log(editMode, "rfvsd");

  const preSubmitHandler = (res, item) => {
    res.current_date = new Date();
    res.checkin_time =
      res?.attendence === "check-in" ? new Date() : item?.checkin_time;
    res.checkout_time =
      res?.attendence === "check-out" ? new Date() : item?.checkout_time;
    res.attendence = res?.attendence;
    res.remarks = res?.remarks;
    return res;
  };

  const onCreate = (values) => {
    if (editMode) {
      const array = JSON.parse(localStorage.getItem("values")) || [];
      array?.map((item) => {
        values = preSubmitHandler(values, item);
        const array = JSON.parse(localStorage.getItem("values")) || [];
        array.pop(item);
        array.push(values);
        localStorage.setItem("values", JSON.stringify(array));
        message.success("Attendence Submitted Successfully", 4);
        hideModal();
        setLoading(true);
      });
    }
  };

  const id = location?.state?.login?.username;
  const datas = JSON.parse(localStorage.getItem("values"));
  const userList = datas?.filter((item) => (item?.username).toString() === id);
  const [form] = Form.useForm();

  return (
    <>
      <Button
        style={{ margin: 10 }}
        className="my-3"
        type="primary"
        onClick={() => history.push("/")}
      >
        Logout
      </Button>
      <div style={{ margin: 10 }}>
        <Table columns={columns} dataSource={userList} bordered />
      </div>

      <AttendenceForm
        form={form}
        data={data}
        editMode={editMode}
        visible={modalVisible}
        onCreate={onCreate}
        onCancel={() => {
          hideModal();
        }}
      />
    </>
  );
};

export default List;
