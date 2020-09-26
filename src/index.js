import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/normalize.css';
import './vendor/fonts.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainApi from "./utils/MainApi";

export const mainApi = new MainApi('https://api.newsapp.ga') // TODO сделать через конфиг

export const Context = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP': {
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: true,
                    type: action.payload
                }
            }
        }
        case 'CLOSE_POPUP': {
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: false
                }
            }
        }
        case 'OPEN_SIGNIN_POPUP':
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: true,
                    type: 'signin',
                }
            }
        case 'OPEN_SIGNUP_POPUP':
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: true,
                    type: 'signup'
                }
            }
        case 'OPEN_SUCCESS_POPUP':
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: true,
                    type: 'success'
                }
            }
        case 'SET_SERVER_ERROR':
            return {
                ...state,
                popup: {
                    ...state.popup,
                    serverError: action.payload
                }
            }
        case 'USER_LOGOUT': {
            return {
                ...state,
                user: {
                    name: 'noName',
                    email: '',
                    id: '',
                    isLoggedIn: false,
                }
            }
        }
        // case 'USER_LOGIN': {
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             isLoggedIn: true,
        //         }
        //     }
        // }
        case 'UPDATE_USER_INFO':
            return {
                ...state,
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
