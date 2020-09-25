import React, {useContext, useState} from "react";
import closeImg from "../../images/close.svg";
import {Context} from "../../index";

export default function PopupSignin() {
    const {state, dispatch} = useContext(Context)
    const [formInfo, setFormInfo] = useState({
        isInputsValid: {
            email: false,
            password: false,
        }
    })

    const closePopup = () => {
        dispatch({type: 'CLOSE_POPUP'})
    }

    // TODO реализовать функции в соответствии с DRY
    const togglePopup = () => {
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

    const onSubmitHandler = (e) => {
        console.log(e.target)
    }

    const formValid = () => {
        const isInputValid = Object.values(formInfo.isInputsValid)
        return isInputValid.every(input => input === true)
    }

    const inputHandler = e => {
        const inputName = e.target.name
        const isValid = e.target.checkValidity()

        setFormInfo({
            ...formInfo,
            isInputsValid: {
                ...formInfo.isInputsValid,
                [inputName]: isValid
            },
        })

        if (!isValid) {
            e.target.nextSibling.className = 'form__error form__error_email form__error_active'
        } else {
            e.target.nextSibling.className = 'form__error form__error_email'
        }
    }

    return (

        <div className="popup__container">
            <img onClick={closePopup} className="popup__close" src={closeImg} alt="кнопка закрытия формы"/>
            <form className="form__signin" name="signin" onSubmit={onSubmitHandler} onChange={formValid}>
                <h3 className="form__heading">Вход</h3>
                <fieldset className="form__fieldset">
                    <div className="form__field">
                        <label className="form__label" htmlFor="signin__email">Email</label>
                        <input onChange={inputHandler} className="form__input" type="email" name="email" id="signin__email"
                               pattern="[a-z0-9-_]+[@]{1}\w{2,}\.\w{2,}" placeholder="Введите почту" required/>
                        <span className="form__error form__error_email">Неправильный формат email</span>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="signin__password">Пароль</label>
                        <input onChange={inputHandler} className="form__input" type="password" name="password" id="signin__password"
                               placeholder="Введите пароль" required minLength="8"/>
                        <span
                            className="form__error form__error_email">Пароль должен состоять минимум из 8 символов</span>
                    </div>
                    <span className="form__error form__error_server ">Ошибка с сервера</span>
                    <button className="btn form__btn" type="submit" disabled={!formValid()}>Войти</button>
                </fieldset>
                <p className="form__reference">или <span
                    onClick={togglePopup}
                    className="form__link form__link-signup">Зарегистрироваться</span></p>
            </form>
        </div>

    )
}