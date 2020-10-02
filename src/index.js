import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import './vendor/normalize.css';
import './vendor/fonts.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainApi from "./utils/MainApi";

export const mainApi = new MainApi('https://api.newsapp.ga') // TODO сделать через конфиг

export const Context = createContext()

export const initialState = {
    currentPath: '/',
    user: {
        name: 'noName',
        email: '',
        isLoggedIn: false,
        id: '',
    },
    mobileMenu: {
        isOpen: false,
    },
    results: {
        isOpen: false,
        noResults: false,
    },
    loader: {
        isOpen: false
    },
    articles: [],
    savedArticles: [],
    popup: {
        isOpen: false,
        type: 'signin',
        serverError: ''
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PATH': {
            return {
                ...state,
                currentPath: action.payload
            }
        }
        case 'SHOW_LOADER': {
            return {
                ...state,
                loader: {
                    isOpen: true
                }
            }
        }
        case 'HIDE_LOADER': {
            return {
                ...state,
                loader: {
                    isOpen: false
                }
            }
        }
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
        case 'OPEN_MOBILE_MENU_POPUP':
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: true,
                    type: 'mobile-menu'
                }
            }
        case 'GET_SAVED_ARTICLES': {
            return {
                ...state,
                savedArticles: action.payload
            }
        }
        case 'GET_ARTICLES':
            return {
                ...state,
                articles: [...action.payload],
                results: {
                    ...state.results,
                    isOpen: true
                }
            }
        case 'CLEAR_SEARCH_RESULTS': {
            return  {
                ...state,
                articles: [
                    ...initialState.articles
                ],
                results: {
                    ...state.results,
                    isOpen: false
                }
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
        case 'TOGGLE_SAVE_ARTICLE': {
            return {
                ...state,
                articles: [
                    ...action.payload
                ]
            }
        }
        case 'REMOVE_CARD': {
            return {
                ...state,
                savedArticles: [
                    ...action.payload
                ]
            }
        }
        default:
            return state
    }
}

// export const initialState = {
//     currentPath: '/',
//     user: {
//         name: 'noName',
//         email: '',
//         isLoggedIn: false,
//         id: '',
//     },
//     header: {},
//     results: {
//         isOpen: false,
//         noResults: false,
//     },
//     loader: {
//         isOpen: false
//     },
//     articles: [],
//     savedArticles: [],
//     popup: {
//         isOpen: false,
//         type: 'signin',
//         serverError: ''
//     }
// }


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
