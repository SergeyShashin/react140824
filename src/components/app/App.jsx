import React, { Component } from "react";
import { Messenger } from "components/messenger";

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