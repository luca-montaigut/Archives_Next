import React from "react";
import { Link } from "react-router-dom";
import FrFlag from "../../images/fr-flag.png";
import EnFlag from "../../images/en-flag.png";

import { Menu } from "antd";

const Navbar = ({ language, changeLanguage }) => {
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/works">Works</Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={changeLanguage}>
          {language === "fr" && (
            <img
              src={EnFlag}
              alt="switch to english"
              style={{ height: "25px" }}
            />
          )}
          {language === "en" && (
            <img
              src={FrFlag}
              alt="mettre en français"
              style={{ height: "25px" }}
            />
          )}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
