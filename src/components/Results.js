import React from "react";

export default function Results () {
    return (
        <section className="results results_is-opened">
            <h2 className="results__heading">Результаты поиска</h2>
            <div className="articles-list" />
            <button className="btn results__more-btn">Показать ещё</button>
        </section>
    )
}