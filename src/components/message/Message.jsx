import './message.scss';
import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  get align() {

    if (this.props.message.author !== 'Бот') {
      return 'start'
    }

    if (this.props.message.author === 'Бот') {
      return 'end'
    }

  }

  render() {
    return (
      <section className='message' style={{ alignSelf: `flex-${this.align}`}}>
        <p>{this.props.message.text}</p>
        <p>{this.props.message.author}</p>
      </section>
    )
  }
} 