import React from "react";
import { FormattedMessage } from "react-intl";
import { Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title>
        <FormattedMessage id="home.title" />
      </Title>
      <p>
        <FormattedMessage id="home.paragraph" />
      </p>
    </div>
  );
};

export default Home;
