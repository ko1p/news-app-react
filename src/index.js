import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/normalize.css';
import './vendor/fonts.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

export const Context = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return {
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    id: action.payload.id,
                    isLoggedIn: true,
                }
            }
        default:
            return state
    }
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
