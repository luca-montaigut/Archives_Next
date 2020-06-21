import React, { useState } from "react";
import "antd/dist/antd.css";
import { Steps, Button } from "antd";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

const App = () => {
  const [current, setCurrent] = useState(0);
  const { Step } = Steps;

  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <div>
      <p>Hey, this is a cool button, done with AntDesign !</p>
      <Steps current={current}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <div>
        {current === 0 && <FormOne next={next} />}
        {current === 1 && <FormTwo next={next} />}
      </div>
      ,
    </div>
  );
};

export default App;
