
import { App } from "components/App";


export const routes = [
  {
    path: '/',
    exact: true,
    element: <App />,
  },
  {
    path: '/chats/:id',
    exact: true,
    element: <App />,
  },

]