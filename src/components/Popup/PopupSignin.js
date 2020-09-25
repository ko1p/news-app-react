import React, {useContext, useState} from "react";
import closeImg from "../../images/close.svg";
import {Context, mainApi} from "../../index";

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
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData)
        mainApi.signin(formData)
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    throw new Error(res.message)
                } else {
                    localStorage.setItem('token', res.token)
                }
                return res
            })
            .then(res => {
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
            })
            .then(res => dispatch({type: 'CLOSE_POPUP'}))
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