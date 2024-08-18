// import React, { Component } from "react";

// export class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//       interval: null
//     };
//   }

//   componentDidMount() {
//     this.state.interval = setInterval(() => console.log('fire'), 200);
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.interval);
//   }

//   handlerClickControl = (e) => {
//     if (e.target.tagName !== 'BUTTON') {
//       return
//     }

//     let targetOperation = Number(e.target.dataset.operation);

//     this.setState((prevState) => ({
//       counter: prevState.counter + targetOperation
//     }));

//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <section id="app" onClick={this.handlerClickControl}>
//         <button data-operation="-1" id="minus">-</button>
//         <span id="monitor">{counter}</span>
//         <button data-operation="1" id="plus">+</button>
//       </section>
//     )
//   }
// }