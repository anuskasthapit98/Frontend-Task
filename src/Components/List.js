import { Table, Tooltip, Modal, message,Button } from "antd";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { EditOutlined, DisconnectOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const List = () => {
  const [loading, setLoading] = useState("false");
  const history = useHistory();

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
      dataIndex:'username'
    },
    {
      title: "Date",
      render: (record, type) => {
        return moment(record.current_date).format("YYYY-MM-DD");
      },
    },
    {
      title: "check in time",
      render: (record, type) => {
        return record.checkin_time
          ? moment(record.checkin_time).format("h:mm:ss a")
          : "-";
      },
    },
    {
      title: "check out time",
      render: (record, type) => {
        return record.checkout_time
          ? moment(record.checkout_time).format("h:mm:ss a")
          : "-";
      },
    },
    {
      title: "remarks",
      dataIndex: "remarks",
    },
    {
      title: "Status",
      render: (record, type) => {
        if (record.checkin_time && record.checkout_time) {
          return "Present";
        }
        if (!record.checkin_time && !record.checkout_time) return "Absent";
        return "Missed";
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
                style={{ fontSize: "1.5em", color: "blue", cursor: "pointer" }}
              />
            </Tooltip>
            <Tooltip title="Remove">
              <DisconnectOutlined
                onClick={() => {
                  console.log(record, index, text);
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

  const data = JSON.parse(localStorage.getItem("values"));

  return (
    <>
      <Button
        block
        style={{ marginTop: 10 }}
        className="mr-1"
        type="primary"
        onClick={() => history.push("/")}
      >
        Logout
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default List;
