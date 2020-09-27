import React from "react";
import ArticlesList from "./ArticlesList";

export default function Results () {
    return (
        <section className="results results_is-opened">
            <h2 className="results__heading">Результаты поиска</h2>
                <ArticlesList />
            <button className="btn results__more-btn">Показать ещё</button>
        </section>
    )
}