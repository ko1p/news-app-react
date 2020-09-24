import React, {useContext} from "react";
import closeImg from "../../images/close.svg";
import {Context} from "../../index";

export default function PopupSignin() {
    const {state, dispatch} = useContext(Context)

    const closePopup = () => {
        dispatch({type: 'CLOSE_POPUP'})
    }

    const togglePopup = () => {
        console.log(state.popup.type)
        const currentPopup = state.popup.type
        const toggleType = (currentPopup) => {
            if (currentPopup === 'signin') {
                return 'signup'
            } else {
                return 'signin'
            }
        }
        dispatch({type: 'TOGGLE_POPUP', payload: toggleType(currentPopup)})
    }

    return (
        <div className="popup__container">
            <img onClick={closePopup} className="popup__close" src={closeImg} alt="кнопка закрытия формы"/>
            <form className="form__signin" name="signin">
                <h3 className="form__heading">Вход</h3>
                <fieldset className="form__fieldset">
                    <div className="form__field">
                        <label className="form__label" htmlFor="signin__email">Email</label>
                        <input className="form__input" type="email" name="email" id="signin__email"
                               pattern="[a-z0-9-_]+[@]{1}\w{2,}\.\w{2,}" placeholder="Введите почту" required/>
                        <span className="form__error form__error_email">Неправильный формат email</span>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="signin__password">Пароль</label>
                        <input className="form__input" type="password" name="password" id="signin__password"
                               placeholder="Введите пароль" required minLength="8"/>
                        <span
                            className="form__error form__error_email">Пароль должен быть длинее из 7 символов</span>
                    </div>
                    <span className="form__error form__error_server ">Ошибка с сервера</span>
                    <button className="btn form__btn" type="submit" disabled>Войти</button>
                </fieldset>
                <p className="form__reference">или <span
                    onClick={togglePopup}
                    className="form__link form__link-signup">Зарегистрироваться</span></p>
            </form>
        </div>

    )
}