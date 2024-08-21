import './messageField.scss';
import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

export class MessageField extends Component {
  constructor(props) {
    super(props);
  }

  handleClickBtnSend = () => {
    this.props.send({ author: document.getElementById('author').value, text: document.getElementById('text').value });
    document.getElementById('text').value = '';
  };

  handleHotKey = (e) => {
    e.ctrlKey && (e.keyCode === 13) ? this.handleClickBtnSend() : '';
  };

  render() {
    return (
      <section className="messageField">
        <TextField id="author" type="text" label="автор" variant="standard" />
        <TextField id="text" type="text" label="текст" onKeyDown={this.handleHotKey} variant="standard" />
        <Button onClick={this.handleClickBtnSend}>Отправить</Button>
      </section>
    )
  }
} 