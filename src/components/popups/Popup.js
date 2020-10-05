import React, {useContext, useEffect} from "react";
import {Context} from "../../state/context";
import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";
import PopupSuccess from "./PopupSuccess";
import PopupMobileMenu from "./PopupMobileMenu";

export default function Popup() {
    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleEscPress)
        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleEscPress)
        }
    })

    const handleEscPress = event => {
        if (event.key === 'Escape') {
            dispatch({type: 'CLOSE_POPUP'})
        }
    }

    const handleClickOutside = event => {
        if (event.target.classList.contains('popup')) {
            dispatch({type: 'CLOSE_POPUP'})
        }
    }

    const renderPopupType = (type) => {
        switch (type) {
            case 'signin': return <PopupSignin />
            case 'signup': return <PopupSignup />
            case 'success': return <PopupSuccess />
            case 'mobile-menu': return <PopupMobileMenu />
            default: return state
        }
    }

    return (
        <>
            {
                state.popup.isOpen ?
                    <div className='popup popup_is-opened'>
                        {
                            renderPopupType(state.popup.type)
                        }
                    </div>
                :
                    null
            }
        </>
    )
}