import React, {useContext} from "react";
import {Context} from "../index";

export default function Preloader () {
    const {state} = useContext(Context)

    return (
        state.loader.isOpen
            ?
            <div className="preloader ">
                <i className="circle-preloader"></i>
                <p className="preloader__text">Идет поиск новостей...</p>
            </div>
            :
            null
    )
}