import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Job from "./components/pages/Job";

const App = () => {
  const [viewJob, setViewJob] = useState("");

  const getJob = (job) => {
    setViewJob(job);
  };

  useEffect(() => {
    console.log(viewJob);
  }, [viewJob]);

  return (
    <div>
      <h1>My Bullshit Job</h1>
      <Searchbar getJob={getJob} />
      {viewJob && <Job viewJob={viewJob} />}
    </div>
  );
};

export default App;
