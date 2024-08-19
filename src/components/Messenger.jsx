import React, { Component } from "react";
import { MessageField } from "components/MessageField";
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        // { author: 'Друг', text: 'Привет, друг!' },
        // { author: 'Друг', text: 'Как дела?' },
        // { author: 'Друг', text: 'Как погода?' },
        // { author: 'Друг', text: 'Как настроение?' },
      ],
    };
  }

  handleSend = (message) => {
    this.setState({ messages: this.state.messages.concat([message]) });
  }

  componentDidUpdate() {
    let { author } = this.state.messages[this.state.messages.length - 1];
    if (author !== 'Бот') {
      setTimeout(() => this.setState({
        messages: this.state.messages.concat({ author: 'Бот', text: `Здравствуйте, ${author}. Ваше сообщение получено.` })
      }), 1000)
    }
  }



  render() {
    return (
      <section>
        <MessageField send={this.handleSend} />
        <MessagesList messages={this.state.messages} />
      </section>
    )
  }
} 