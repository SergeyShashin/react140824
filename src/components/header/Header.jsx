
import './header.scss';

import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='header'>
        <h2>Заголовок</h2>
      </section>
    );
  }
}