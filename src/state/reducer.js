import {initialState} from "./initialState"
import {RENDER_AT_A_TIME} from "../constants/config";


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
        case 'SHOW_MORE_ARTICLES': {
            return {
                ...state,
                results: {
                    ...state.results,
                    numOfRenderedCards: state.results.numOfRenderedCards + RENDER_AT_A_TIME
                }
            }
        }
        case 'RESET_NUM_OF_RENDERED_CARDS': {
            return {
                ...state,
                results: {
                    ...state.results,
                    numOfRenderedCards: RENDER_AT_A_TIME
                }
            }
        }
        default:
            return state
    }
}