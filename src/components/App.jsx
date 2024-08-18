import React, { Component } from "react";
import { Messenger } from "components/Messenger";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Messenger />
      </section>
    )
  }
}