import React from "react";

class Email extends React.Component {
  render() {
    let { firstName, lastName } = this.props;
    let prefix = firstName.toLowerCase() + "." + lastName.toLowerCase();

    return (
      <a href={`mailto:${prefix}@gmail.com`} className="btn btn-primary">
        Ecrire
      </a>
    );
  }
}

export default Email;
