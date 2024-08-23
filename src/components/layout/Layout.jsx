
import './layout.scss';

import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom';


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
    console.log(e.target.id);
    this.setState({ selectChat: e.target.id });
    console.log(this.state.selectChat);
  };

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
          <div className='chats' onClick={this.handlerClickChats}>
            <p id="1">1 чат</p>
            <p id="2">2 чат</p>
            <p id="3">3 чат</p>
            <p id="4">4 чат</p>
            <p id="5">5 чат</p>
            <p id="6">6 чат</p>
            <p id="7">7 чат</p>
            <p id="8">8 чат</p>
            <p id="9">9 чат</p>
            <p id="10">10 чат</p>
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
            <MessagesList messages={this.state.messages} />
          </div>
        </div>
      </section>
    );
  }
}