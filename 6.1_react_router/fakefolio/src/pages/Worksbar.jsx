import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Worksbar = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/exercices`}>Exercices</Link>
        </li>
        <li>
          <Link to={`${url}/case-study`}>Case study</Link>
        </li>
        <li>
          <Link to={`${url}/concret-case`}>Concret Case</Link>
        </li>
      </ul>
    </>
  );
};

export default Worksbar;
