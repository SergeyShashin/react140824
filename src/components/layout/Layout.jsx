
import './layout.scss';

import React, { Component } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText'
// import { Link } from 'react-router-dom';

import { Header } from 'components/Header';
import { MessageField } from "components/MessageField";
import { MessagesList } from "components/MessagesList";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectChat: null,
      messages: [
        // { author: 'Друг', text: 'Привет, друг!' },
        // { author: 'Друг', text: 'Как дела?' },
        // { author: 'Друг', text: 'Как погода?' },
        // { author: 'Друг', text: 'Как настроение?' },
      ],
    };
  }

  handleSend = (message) => {
    if (message) {
      this.setState({ messages: this.state.messages.concat([message]) });
    }
  }

  handlerClickChats = (e) => {
    this.setState({ selectChat: e.target.id });
    console.log(this.state.selectChat);
  };

  componentDidUpdate() {
    const { messages } = this.state

    if (messages.length < 1) {
      return
    }

    let { author } = messages[messages.length - 1];

    if (author !== 'Бот') {
      setTimeout(() => this.setState({
        messages: messages.concat({ author: 'Бот', text: `Здравствуйте, ${author}. Ваше сообщение получено.` })
      }), 1000);
    }
  }

  render() {
    const { messages } = this.state;

    if (messages.length < 1) {
      return (
        <section className='layout'>
          <Header />
          <div className="layout-content">
            <div className='chats' onClick={this.handlerClickChats}>
              <p id="1">чат 1</p>
              <p id="2">чат 2</p>
              <p id="3">чат 3</p>
              <p id="4">чат 4</p>
              <p id="5">чат 5</p>
              <p id="6">чат 6</p>
              <p id="7">чат 7</p>
              <p id="8">чат 8</p>
              <p id="9">чат 9</p>
              <p id="10">чат 10</p>
            </div>
            {/* <List className="chats">
                <ListItem >
                  <Link to='/chats/1'>
                    <ListItemText>
                      чат
                    </ListItemText>
                  </Link>
                </ListItem>
              </List> */}
            <div className="inputOutput">
              {!this.state.selectChat && <p>Для начала общения можете выбрать чат.</p>}
              {this.state.selectChat && <MessageField send={this.handleSend} />}
              {this.state.selectChat && <MessagesList messages={messages} />}
            </div>
          </div>
        </section>
      );
    } else {


      return (
        <section className='layout'>
          <Header />
          <div className="layout-content">
            <div className='chats' onClick={this.handlerClickChats}>
              <p id="1">чат 1</p>
              <p id="2">чат 2</p>
              <p id="3">чат 3</p>
              <p id="4">чат 4</p>
              <p id="5">чат 5</p>
              <p id="6">чат 6</p>
              <p id="7">чат 7</p>
              <p id="8">чат 8</p>
              <p id="9">чат 9</p>
              <p id="10">чат 10</p>
            </div>
            {/* <List className="chats">
            <ListItem >
              <Link to='/chats/1'>
                <ListItemText>
                  чат
                </ListItemText>
              </Link>
            </ListItem>
          </List> */}
            <div className="inputOutput">
              <MessageField send={this.handleSend} />
              <MessagesList messages={messages} />
            </div>
          </div>
        </section>
      );
    }
  }
}