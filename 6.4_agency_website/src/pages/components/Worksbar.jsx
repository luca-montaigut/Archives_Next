import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import works from "./StudyCase/studycases";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Worksbar = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          {works.map(({ id, slug, name }) => (
            <Menu.Item key={id}>
              <Link to={`${url}/${slug}-study-case`}>{name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>{" "}
    </>
  );
};

export default Worksbar;
