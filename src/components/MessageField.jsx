import React, { Component } from "react";

export class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      text: null,
    }
  }

  handleClickBtnSend = (e) => {
    this.setState({ author: document.getElementById('author').value, text: document.getElementById('text').value });
  }

  componentDidUpdate() {
    let msg = { author: this.state.author, text: this.state.text };
    this.props.send(msg);
    document.getElementById('author').value = '';
    document.getElementById('text').value = '';
  }

  render() {
    return (
      <section>
        <input id="author" type="text" placeholder="автор" />
        <input id="text" type="text" placeholder="текст" />
        <button onClick={this.handleClickBtnSend}>Отправить</button>
      </section>
    )
  }
} 