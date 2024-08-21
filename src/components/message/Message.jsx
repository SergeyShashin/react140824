import './message.scss';

import React, { Component } from "react";
import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);

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
    let { author } = this.props.message;
    let { text } = this.props.message;

    const classes = classNames('message', {
      'message-owner': author !== 'Бот',
      'message-companion': author === 'Бот',
    });

    return (
      // <section className='message' style={{ alignSelf: `flex-${this.align}`}}>
      <section className={classes} >
        <p>{text}</p>
        <p className='message-sender'>{author}</p>
      </section>
    )
  }
} 