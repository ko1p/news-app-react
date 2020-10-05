import React, {useContext} from "react"
import {Context} from "../state/context"

export default function Preloader () {
    const {state} = useContext(Context)

    return (
        state.loader.isOpen
            ?
            <div className="preloader ">
                <i className="circle-preloader" />
                <p className="preloader__text">Идет поиск новостей...</p>
            </div>
            :
            null
    )
}