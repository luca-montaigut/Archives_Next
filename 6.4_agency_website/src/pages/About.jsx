import React from "react";
import { FormattedMessage } from "react-intl";
import { Typography } from "antd";

const { Title } = Typography;

const About = () => {
  return (
    <div>
      <Title>
        <FormattedMessage id="about.title" />
      </Title>
      <p>
        <FormattedMessage id="about.paragraph" />
      </p>
    </div>
  );
};

export default About;
