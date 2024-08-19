import React, { Component } from "react";

export class MessageField extends Component {
  constructor(props) {
    super(props);
  }

  handleClickBtnSend = (e) => {
    this.props.send({ author: document.getElementById('author').value, text: document.getElementById('text').value });

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