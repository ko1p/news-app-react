import React, {useContext, useEffect} from "react";
import MainApi from "../utils/MainApi";
import {Context} from "../index";

export default function Header () {
    const {state, dispatch} = useContext(Context)

    // localStorage.clear()
    localStorage.setItem('token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWY1YzVlMmQzOTg0MzZjNDg3YWI1OWYiLCJpYXQiOjE2MDA4NDc2OTAsImV4cCI6MTYwMTQ1MjQ5MH0.hlldTG0Xswx3qPda7YaUDsVeIuEYYOwAZpAQ1uZu81k')
    const mainApi = new MainApi('https://api.newsapp.ga') // TODO вынести из хедера

    useEffect(() => {
        if (localStorage.getItem('token')) {
            mainApi.getUserData(localStorage.token)
                .then(res => res.json())
                .then(res => {
                    dispatch({type: 'UPDATE_USER_INFO', payload: {
                            name: res.data.name,
                            email: res.data.email,
                            id: res.data._id,
                        }})
                })
                .catch(e => console.log(e)) // TODO обрабатывать ошибки надо через then
        }
        //eslint-disable-next-line
    }, [])

    const userLogout = () => {
        localStorage.clear()
        dispatch({type: 'USER_LOGOUT'})
    }

    return (
        <header className="header">
            <div className="header__container header__container_black">
                <p className="header__logo">NewsExplorer</p>
                <nav className="header__navigation">
                    <a className="header__nav-link header__nav-link_active" href="./index.html">Главная</a>
                    {state.user.isLoggedIn ?
                        <>
                            <a className="header__nav-link header__nav-link_not-active"
                               href="./articles.html">Сохраненные статьи</a>
                                <button
                                    onClick={userLogout}
                                    className="btn btn__logout header__nav-link header__nav-logout">{state.user.name}
                                    <svg className="header__logout-image" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                                              fill="currentColor"/>
                                    </svg>
                                </button>
                        </>
                        :
                        <button
                            onClick={() => dispatch({type: 'OPEN_SIGNIN_POPUP'})}
                            className="btn btn__auth header__nav-link">Авторизоваться</button>
                    }
                    <button className="btn btn__mobile-menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="8" width="16" height="2" fill="white"/>
                            <rect x="4" y="14" width="16" height="2" fill="white"/>
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
}