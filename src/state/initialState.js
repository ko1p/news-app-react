import {RENDER_AT_A_TIME} from "../constants/config";

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
        numOfRenderedCards: RENDER_AT_A_TIME
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