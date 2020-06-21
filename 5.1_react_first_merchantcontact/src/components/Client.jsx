import React from "react";
import Phone from "./Phone";
import Email from "./Email";
import faker from "faker";

const styles = {
  width: "18rem",
};

class Client extends React.Component {
  render() {
    let { firstName, lastName } = this.props;
    let picture = faker.image.avatar();
    let job = faker.name.jobTitle();
    let phone = <Phone number={faker.phone.phoneNumber()} />;
    let email = <Email firstName={firstName} lastName={lastName} />;

    return (
      <div className="card" style={styles}>
        <img src={`${picture}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">{job}</p>
          {phone} {email}
        </div>
      </div>
    );
  }
}

export default Client;
