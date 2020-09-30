import React, {useContext} from "react";
import ArticlesList from "./ArticlesList";
import {Context} from "../index";

export default function SearchResults() {
    const {state} = useContext(Context)
    return (
        state.results.isOpen ?
            <section className="results results_is-opened">
                <h2 className="results__heading">Результаты поиска</h2>
                <ArticlesList articles={state.articles} />
            </section>
            :
            null
    )
}