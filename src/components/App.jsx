import React, { Component } from "react";
import { Counter } from "components/Counter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: false
    };

  }

  handleToggle = () => {
    this.setState({ showCounter: !this.state.showCounter });
  }

  render() {
    return (
      <section>
        {
          this.state.showCounter && <Counter />
        }

        <button onClick={this.handleToggle}>Togglle</button>
      </section>
    )
  }
}