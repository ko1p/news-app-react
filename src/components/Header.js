import React, {useContext, useEffect} from "react";
import {Context, mainApi} from "../index";
import {NavLink} from 'react-router-dom'

export default function Header () {
    const {state, dispatch} = useContext(Context)
    const path = state.currentPath
    const cls = []

    if (path === '/') {
        cls.push('header header_black')
    } else {
        cls.push('header header_white')
    }

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

    const clearSerchResults = () => {
        dispatch({type: 'CLEAR_SEARCH_RESULTS'}) // TODO отпимизировать закрытие попапа и очистка поисковых запросов
    }

    const openMobileMenu = () => {
        dispatch({type: 'OPEN_MOBILE_MENU_POPUP'})
    }

    return (
        <header className={cls.join(' ')}>
            <div className="header__container header__container_black">
                <p className="header__logo">NewsExplorer</p>
                <nav className="header__navigation">
                    <NavLink className="header__nav-link" exact to="/" activeClassName="header__nav-link_active">Главная</NavLink>
                    {state.user.isLoggedIn ?
                        <>
                            <NavLink className="header__nav-link" activeClassName="header__nav-link_active"
                               to="/articles" onClick={clearSerchResults}>Сохраненные статьи</NavLink>
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
                    <button className="btn btn__mobile-menu" onClick={openMobileMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="8" width="16" height="2" fill={path === '/' ? 'white' : 'black'}/>
                            <rect x="4" y="14" width="16" height="2" fill={path === '/' ? 'white' : 'black'}/>
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
}