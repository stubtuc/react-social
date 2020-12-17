import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppContext from "./AppContext";
import {AppContextType} from "./interfaces";
import {Provider} from "react-redux";
import store from "./store";

const initialState:AppContextType = {
    users: [
        {
            id: 0,
            login: 'admin',
            email: 'admin@mail.ru',
            password: '123'
        },
        {
            id: 1,
            login: 'kek',
            email: 'kek@mail.ru',
            password: '321'
        },
    ],
    posts: [
        {
            id: 1,
            header: 'Post',
            text: 'Text',
            date: 'Now',
            likes: ['kek', 'lol', 'arbidol'],
            author: 'admin'
        }
    ],
    currentUser: {
        id: -1,
        login: 'guest',
    }
}

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={initialState}>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
