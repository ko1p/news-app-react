import React, {useContext} from "react";
import notFoundImage from '../images/not-found.svg'
import {Context} from "../index";

export default function NoArticles() {
    const {state} = useContext(Context)
    console.log(state.results.noResults)

    const noResults =
        <div className="no-articles no-articles_is-opened">
            <img className="no-articles__image" src={notFoundImage} alt="ничего не найдено"/>
            <h3 className="no-articles__heading">Ничего не найдено</h3>
            <p className="no-articles__text">К сожалению по вашему запросу ничего не найдено.</p>
        </div>

    return state.results.noResults ? noResults : null
}
