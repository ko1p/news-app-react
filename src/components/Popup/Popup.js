import React, {useContext} from "react";
import {Context} from "../../index";
import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";
import PopupSuccess from "./PopupSuccess";
import PopupMobileMenu from "./PopupMobileMenu";


export default function Popup() {
    const {state, dispatch} = useContext(Context)

    const closePopup = () => {
        dispatch({type: 'CLOSE_POPUP'})
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
                    <div className='popup popup_is-opened' onClick={closePopup}>
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