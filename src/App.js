import React, {useReducer} from 'react';
import './App.css';

import HeaderCover from "./components/HeaderCover";
import Preloader from "./components/Preloader";
import NoArticles from "./components/NoArticles";
import Results from "./components/Results";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import {Context, reducer} from "./index";

export const initialState = {
    user: {
        name: 'noName',
        email: '',
        isLoggedIn: false,
        id: '',
    },
    header: {},
    search: {},
    loader: {},
    savedArticles: {},
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            <main className="page">
                <HeaderCover/>
                <Preloader/>
                <NoArticles/>
                <Results/>
                <Author/>
                <Footer/>
                <Popup/>
            </main>
        </Context.Provider>
    );
}

export default App;
