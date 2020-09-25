import React from "react";
import NewsApi from "../utils/NewsApi";
import {NEWS_API_DAYS, NEWS_API_TOKEN, NEWS_API_URL} from "../constants/config";

export default function Search() {
    const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_TOKEN, NEWS_API_DAYS)// TODO вынести из поиска

    const fetchNews = (keyword) => {
        newsApi.getNews(keyword)
            .then(res => res.json())
            .then(res => console.log(res))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const keyword = e.target.searchInput.value
        fetchNews(keyword)
        e.target.searchInput.value = ''
    }

    return (
        <div className="search">
            <h1 className="search__heading">Что в мире творится?</h1>
            <p className="search__paragraph">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
                кабинете.</p>
            <form className="search__form"
                  onSubmit={onSubmitHandler}
            >
                <input className="search__imput" name="searchInput" type="text" placeholder="Введите тему новости"
                       required minLength="1"/>
                <button
                    className="btn search__btn" type="submit">Искать
                </button>
            </form>
        </div>
    )
}