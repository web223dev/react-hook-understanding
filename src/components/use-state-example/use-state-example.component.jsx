import React, { useState } from "react";

import Card from "../card/card.component";

const UseStateExample = () => {
  const [name, setName] = useState("Sun");
  const [address, setAddress] = useState("Canada");

  return (
    <Card>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName("Sun Li")}>Set Name to Sun Li</button>
      <button onClick={() => setAddress("United States")}>
        Set Address to United States
      </button>
    </Card>
  );
};

class StateClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Yihua",
    };
  }

  render() {
    return (
      <Card>
        <h1>{this.state.name}</h1>
        <button onClick={this.setState({ name: "Andrei" })}>
          Set Name to Andrei
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
