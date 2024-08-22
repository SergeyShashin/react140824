
import './layout.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { MessageField } from "components/MessageField";
import { MessagesList } from "components/MessagesList";

export class Layout extends Component {
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
      }), 1000);
    }
  }

  render() {

    return (
      <section className='layout'>
        <Header />
        <div className="layout-content">
          <div className="chats">
            <div id="chat">1 чат</div>
            <div id="chat">2 чат</div>
            <div id="chat">3 чат</div>
            <div id="chat">4 чат</div>
            <div id="chat">5 чат</div>
            <div id="chat">6 чат</div>
            <div id="chat">7 чат</div>
            <div id="chat">8 чат</div>
            <div id="chat">9 чат</div>
            <div id="chat">10 чат</div>
            <div id="chat">11 чат</div>
            <div id="chat">12 чат</div>
          </div>
          <div className="inputOutput">
            <MessageField send={this.handleSend} />
            <MessagesList messages={this.state.messages} />
          </div>
        </div>
      </section>
    );
  }
}