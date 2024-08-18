import React, { Component } from "react";
import { MessageField } from "components/MessageField";
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { author: 'Друг', text: 'Привет, друг!' },
        { author: 'Друг', text: 'Как дела?' },
        { author: 'Друг', text: 'Как погода?' },
        { author: 'Друг', text: 'Как настроение?' },
      ],
    };
  }

  send = (msg) => {
    // this.state.messages.concat([msg]);
    // this.setState({ messages: this.state.messages.concat([msg]) })
  }

  // componentDidUpdate() {
  //   console.log(this.state.messages);

  // }

  render() {
    return (
      <section>
        <MessageField send={this.send} />
        <MessagesList messages={this.state.messages} />
      </section>
    )
  }
} 