import React, {useReducer} from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import {withRouter} from 'react-router'
import {initialState} from "./state/initialState"
import {reducer} from './state/reducer'
import {Context} from "./state/context"
import NotFound from "./pages/NotFoundPage"
import MainPage from "./pages/MainPage"
import ArticlesPage from "./pages/ArticlesPage"

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
            <Context.Provider value={{state, dispatch}}>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/articles' >
                        { !state.user.isLoggedIn ? <Redirect to="/" /> : withRouter(ArticlesPage)}
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Context.Provider>
    );
}

export default App;
