import React from "react";

export default function Search () {
    return (
        <div className="search">
            <h1 className="search__heading">Что в мире творится?</h1>
            <p className="search__paragraph">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
                кабинете.</p>
            <form className="search__form">
                <input className="search__imput" name="searchInput" type="text" placeholder="Введите тему новости"
                       required minLength="1" />
                    <button className="btn search__btn" type="submit">Искать</button>
            </form>
        </div>
    )
}