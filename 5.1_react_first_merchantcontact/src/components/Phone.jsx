import React from "react";

class Phone extends React.Component {
  render() {
    let { number } = this.props;
    return (
      <a href={`callto:${number}`} className="btn btn-primary">
        Appeler
      </a>
    );
  }
}

export default Phone;
