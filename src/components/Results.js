import React, {useContext} from "react";
import ArticlesList from "./ArticlesList";
import {Context} from "../index";

export default function Results() {
    const {state} = useContext(Context)
    return (
        state.results.isOpen ?
            <section className="results results_is-opened">
                <h2 className="results__heading">Результаты поиска</h2>
                <ArticlesList/>
                <button className="btn results__more-btn">Показать ещё</button>
            </section>
            :
            null
    )
}