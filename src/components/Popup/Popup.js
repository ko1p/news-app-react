import React, {useContext} from "react";
import {Context} from "../../index";
import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";


export default function Popup() {
    const {state} = useContext(Context)

    return (
        <>
            {
                state.popup.isOpen ?
                    <div className='popup popup_is-opened'>
                        {
                            state.popup.type === 'signin' ?
                                <PopupSignin />
                                :
                                <PopupSignup />
                        }
                    </div>
                :
                    null
            }
        </>
    )
}