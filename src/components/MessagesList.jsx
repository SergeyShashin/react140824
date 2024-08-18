import React, { Component } from "react";
import { Message } from "components/Message";

export class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.messages.map((message, idx) => <Message key={idx} message={message} />)}

      </section>
    )
  }
} 