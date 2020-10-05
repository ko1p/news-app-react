import React, {useContext} from "react";
import closeImg from "../../images/close.svg";
import {Context} from "../../state/context";

export default function PopupSuccess() {
    const {dispatch} = useContext(Context)

    const closePopup = () => {
        dispatch({type: 'CLOSE_POPUP'})
    }

    const openSigninPopup = () => {
        dispatch({type: 'OPEN_SIGNIN_POPUP'})
    }

    return (
        <div className="popup__container">
            <img className="popup__close"
                 onClick={closePopup}
                 src={closeImg} alt="кнопка закрытия формы"/>
            <h3 className="popup__heading">Пользователь успешно зарегистрирован</h3>
            <span
                onClick={openSigninPopup}
                className="form__link form__link-success">Выполнить вход</span>
        </div>
    )
}