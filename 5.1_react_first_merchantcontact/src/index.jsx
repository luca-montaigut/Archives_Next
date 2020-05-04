import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Clients from "./components/Clients";

class App extends React.Component {
  render() {
    return <Clients />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
