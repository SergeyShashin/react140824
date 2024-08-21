import './messenger.scss';

import React, { Component } from "react";

import { Layout } from "components/Layout";


export class Messenger extends Component {
  constructor(props) {
    super(props);
    
  }

 

  render() {
    return (
      <section className='messenger'>
        <Layout />
      </section>
    )
  }
} 