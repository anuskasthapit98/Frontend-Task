import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Menu mode="horizontal">
        <Link to="/form">
          <Menu.Item>Attendence Form</Menu.Item>
        </Link>
        <Link to="/list">
          <Menu.Item>Attendence Records</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}
