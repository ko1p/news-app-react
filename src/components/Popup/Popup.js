import React, {useContext} from "react";
import {Context} from "../../index";
import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";
import PopupSuccess from "./PopupSuccess";


export default function Popup() {
    const {state} = useContext(Context)

    const renderPopupType = (type) => {
        switch (type) {
            case 'signin': return <PopupSignin />
            case 'signup': return <PopupSignup />
            case 'success': return <PopupSuccess />
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