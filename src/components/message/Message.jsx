import './message.scss';
import React, { Component } from "react";

import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);

    // const classes=classNames('message', {
    //   author:
    // })
  }

  // get align() {

  //   if (this.props.message.author !== 'Бот') {
  //     return 'start'
  //   }

  //   if (this.props.message.author === 'Бот') {
  //     return 'end'
  //   }

  // }


  render() {
    return (
      // <section className='message' style={{ alignSelf: `flex-${this.align}`}}>
      <section className='message' >
        <p>{this.props.message.text}</p>
        <p className='sender'>{this.props.message.author}</p>
      </section>
    )
  }
} 