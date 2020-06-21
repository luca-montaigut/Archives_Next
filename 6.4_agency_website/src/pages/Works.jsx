import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Worksbar from "./components/Worksbar";
import StudyCase from "./components/StudyCase/StudyCase";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Works = () => {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <div>
      <div>
        <Title>
          <FormattedMessage id="works.title" />
        </Title>
        <p>
          <FormattedMessage id="works.paragraph" />
        </p>
      </div>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Worksbar />
        <Switch>
          <Route path={`${path}/:studyCaseId`}>
            <StudyCase />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default Works;
