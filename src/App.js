import React, {useReducer} from 'react';
import './App.css';

import {Context, initialState, reducer} from "./index";
import {Route, Switch, Redirect} from "react-router-dom";
import NotFound from "./components/pages/NotFoundPage";
import MainPage from "./components/pages/MainPage";
import ArticlesPage from "./components/pages/ArticlesPage";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
            <Context.Provider value={{state, dispatch}}>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/articles' >
                        { !state.user.isLoggedIn ? <Redirect to="/" /> : <ArticlesPage />}
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Context.Provider>
    );
}

export default App;
