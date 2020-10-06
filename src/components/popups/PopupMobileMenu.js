import React, {useContext} from "react"
import closeIcon from '../../images/close.svg'
import logoutIcon from '../../images/logoutIcon.svg'
import {Context} from "../../state/context"
import {Link} from "react-router-dom"

export default function PopupMobileMenu() {
    const {state, dispatch} = useContext(Context)

    const closePopup = () => {
        dispatch({type: 'CLOSE_POPUP'})
    }

    const savedArticlesClickHandler = () => {
        dispatch({type: 'CLOSE_POPUP'})
        dispatch({type: 'CLEAR_SEARCH_RESULTS'})
    }

    const mainPageClickHandler = () => {
        dispatch({type: 'CLOSE_POPUP'})
    }

    const openSigninPopup = () => {
        dispatch({type: 'OPEN_SIGNIN_POPUP'})
    }

    const userLogout = () => {
        localStorage.clear()
        dispatch({type: 'USER_LOGOUT'})
    }

    return (
        <div className="mobile-menu">
            <div className="mobile-menu__header">
                <p className="mobile-menu__logo">NewsExplorer</p>
                <img className="mobile-menu__close" src={closeIcon} onClick={closePopup}
                     alt="кнопка закрытия меню"/>
            </div>
            <nav className="mobile-menu__links">
                <Link className="mobile-menu__link" to="/" onClick={mainPageClickHandler}>Главная</Link>
                <Link className="mobile-menu__link" to="/articles" onClick={savedArticlesClickHandler}>Сохранённые
                    статьи</Link>
            </nav>
            {
                state.user.isLoggedIn ?
                    <button className="btn mobile-menu__btn mobile-menu__btn-auth mobile-menu__btn"
                            onClick={userLogout}
                    > {state.user.name} <img className='header__logout-image' src={logoutIcon} alt="logout" />
                    </button>
                    :
                    <button className="btn mobile-menu__btn mobile-menu__btn-auth mobile-menu__btn"
                            onClick={openSigninPopup}
                    > Авторизоваться
                    </button>
            }
            <button className="btn mobile-menu__btn mobile-menu__btn-logout mobile-menu__btn_hide">
                <svg className="header__logout-image" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                          fill="#FFF"/>
                </svg>
            </button>
        </div>

    )
}