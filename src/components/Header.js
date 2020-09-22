import React from "react";

export default function Header () {
    return (
        <header className="header">
            <div className="header__container header__container_black">
                <p className="header__logo">NewsExplorer</p>
                <nav className="header__navigation">
                    <a className="header__nav-link header__nav-link_active" href="./index.html">Главная</a>
                    <a className="header__nav-link header__nav-link_not-active header__nav-link_hide"
                       href="./articles.html">Сохраненные статьи</a>
                    <button className="btn btn__auth header__nav-link">Авторизоваться</button>
                    <button
                        className="btn btn__logout header__nav-link header__nav-logout header__nav-link_hide">Грета
                        <svg className="header__logout-image" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>
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