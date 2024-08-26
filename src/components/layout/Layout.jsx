
import './layout.scss';

import React, { Component } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText'
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { Header } from 'components/Header';
import { MessageField } from "components/MessageField";
import { MessagesList } from "components/MessagesList";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectChat: null,
      // messages: [
      // { author: 'Друг', text: 'Привет, друг!' },
      // { author: 'Друг', text: 'Как дела?' },
      // { author: 'Друг', text: 'Как погода?' },
      // { author: 'Друг', text: 'Как настроение?' },
      // ],
      chats: {
        '1': [
          // { author: 'Друг', text: 'Привет, друг!' },
          // { author: 'Друг', text: 'Как дела?' },
          // { author: 'Друг', text: 'Как погода?' },
          // { author: 'Друг', text: 'Как настроение?' },
          { author: 'Бот', text: `Чат ${'1'} добавлен.` }
        ],

      }
    };
  }

  handleSend = (message) => {
    if (message && this.state.selectChat) {
      let { selectChat } = this.state;
      let messages = this.state.chats[selectChat];
      messages = [...messages.concat([message])];
      const updatedChat = Object.create(this.state.chats);
      updatedChat[selectChat] = messages;
      this.setState({ chats: Object.assign(this.state.chats, updatedChat) });
      console.log(this.state);
    }
  }

  handlerClickChats = (e) => {
    this.setState({ selectChat: e.target.id });
  };

  componentDidUpdate() {
    let { selectChat } = this.state;
    const messages = this.state.chats[selectChat];

    if (!messages) {
      return
    }

    if (messages.length < 1) {
      return
    }

    let { author } = messages[messages.length - 1];

    if (author !== 'Бот') {
      setTimeout(() => this.handleSend({ author: 'Бот', text: `Здравствуйте, ${author}. Ваше сообщение получено.` }), 1000);
    }
  }

  addChat = () => {
    let newChat = prompt('Какое имя чата?');
    this.state.chats[newChat] = [{ author: 'Бот', text: `Чат ${newChat} добавлен.` }];
    console.log(this.state);
    this.setState({ chats: this.state.chats, selectChat: newChat });
  }

  render() {
    let { selectChat } = this.state;
    const messages = this.state.chats[selectChat];

    let listChats = Object.keys(this.state.chats);
    console.log('список чатов' + listChats);

    return (
      <section className='layout'>
        <Header />
        <div className="layout-content">
          <div className='chats' onClick={this.handlerClickChats}>
            {/* <p id="1">чат 1</p> */}
            {listChats.map((chatName, idx) => <p key={idx} id={chatName}>{`${chatName} чат`}</p>)}
            <Button onClick={this.addChat}>Добавить</Button>


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
          < div className="inputOutput" >
            {!this.state.selectChat && <code>Для начала общения можете выбрать чат.</code>}
            {this.state.selectChat && <MessageField send={this.handleSend} />}
            {this.state.selectChat && <MessagesList messages={messages} />}
          </div>
        </div>
      </section>
    );
  }
}