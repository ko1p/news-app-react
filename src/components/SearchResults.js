import React, {useContext} from "react"
import {Context} from "../state/context"
import ArticlesList from "./ArticlesList"

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