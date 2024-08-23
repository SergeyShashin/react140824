import 'assets/global.scss';

import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from 'components/app';


// const element = <h2 className="element">Привет из Реакта+jsx!</h2>;
// const messages = ['Привет из Реакта+jsx!', 'Сегодня 15.08.2024.'];

// const Message = props => <p>{props.text}</p>;

// const Messages = props => props.messages.map(message => <Message text={message} />);

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
  );
  




