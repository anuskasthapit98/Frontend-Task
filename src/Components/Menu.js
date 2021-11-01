import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Menu mode="horizontal">
        <Link to="/about">
          <Menu.Item>About Us</Menu.Item>
        </Link>

        <Link to="/form">
          <Menu.Item>Employee Form</Menu.Item>
        </Link>
        <Link to="/list">
          <Menu.Item>Employee List</Menu.Item>
        </Link>
        
        <Link to="/policy">
          <Menu.Item>Password</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}
