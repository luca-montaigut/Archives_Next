import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import works from "../data/works";

const Jobdone = () => {
  let { jobId } = useParams();
  const [currentWork, setCurrentWork] = useState(null);

  useEffect(() => {
    setCurrentWork(works.find((work) => work.slug === jobId));
  });

  return (
    <div>
      {currentWork &&
        currentWork.cards.map((job, index) => <p key={index}>{job}</p>)}
    </div>
  );
};

export default Jobdone;
