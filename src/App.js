import React, {useReducer} from 'react';
import './App.css';

import HeaderCover from "./components/HeaderCover";
import Preloader from "./components/Preloader";
import NoArticles from "./components/NoArticles";
import Results from "./components/Results";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Popup from "./components/Popup/Popup";
import {Context, reducer} from "./index";

export const initialState = {
    user: {
        name: 'noName',
        email: '',
        isLoggedIn: false,
        id: '',
    },
    header: {},
    results: {
        isOpen: false,
        noResults: false,
    },
    loader: {
        isOpen: false
    },
    articles: [],
    popup: {
        isOpen: false,
        type: 'signin',
        serverError: ''
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            <main className="page">
                <HeaderCover />
                <Preloader />
                <NoArticles />
                <Results />
                <Author />
                <Footer />
                <Popup />
            </main>
        </Context.Provider>
    );
}

export default App;
