import React, {useContext, useState} from "react";
import closeImg from "../../images/close.svg";
import {Context, mainApi} from "../../index";

export default function PopupSignup() {
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
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData)
        mainApi.signup(formData)
            .then(res => res.json())
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    dispatch({type: 'OPEN_SUCCESS_POPUP'})
                } else if (res.message) {
                    dispatch({type: 'SET_SERVER_ERROR', payload: res.message})
                    throw new Error(res.message)
                }
            })
            .catch(e => console.error(e))
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
            <form className="form__signup" name="signin" onSubmit={onSubmitHandler} onChange={formValid}>
                <h3 className="form__heading">Регистрация</h3>
                <fieldset className="form__fieldset">
                    <div className="form__field">
                        <label className="form__label" htmlFor="signup__email">Email</label>
                        <input onChange={inputHandler} className="form__input" type="email" name="email" id="signup__email"
                               pattern="[a-z0-9-_]+[@]{1}\w{2,}\.\w{2,}" placeholder="Введите почту" required/>
                        <span className="form__error form__error_email ">Неправильный формат email</span>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="signup__password">Пароль</label>
                        <input onChange={inputHandler} className="form__input" type="password" name="password" id="signup__password"
                               placeholder="Введите пароль" required minLength="8"/>
                        <span
                            className="form__error form__error_email">Минимальная длина пароля 8 символов</span>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="signup__name">Имя</label>
                        <input onChange={inputHandler} className="form__input" type="text" name="name" id="signup__name"
                               placeholder="Введите своё имя" required minLength="2"/>
                        <span className="form__error form__error_name">Имя должно быть длинее 1 символа</span>
                    </div>
                    {
                        state.popup.serverError ?
                            <span className='form__error form__error_server form__error_active'>{state.popup.serverError}</span>
                            :
                            null
                    }
                    <button className="btn form__btn" type="submit" disabled={!formValid()}>Зарегистрироваться</button>
                </fieldset>
                <p className="form__reference">или <span
                    onClick={togglePopup}
                    className="form__link form__link-signin">Войти</span>
                </p>
            </form>
        </div>
    )
}