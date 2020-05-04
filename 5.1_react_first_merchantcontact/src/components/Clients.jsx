import React from "react";
import faker from "faker";
import Client from "./Client";

class Clients extends React.Component {
  render() {
    let clientList = [];

    for (let i = 0; i < 10; i++) {
      let data = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      };
      clientList.push(data);
    }

    let clients = clientList.map((client) => (
      <Client firstName={client.firstName} lastName={client.lastName} />
    ));

    return (
      <>
        <div className="row">{clients}</div>
      </>
    );
  }
}

export default Clients;
