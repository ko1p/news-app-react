import React, {useContext} from "react";
import NewsApi from "../utils/NewsApi";
import {NEWS_API_DAYS, NEWS_API_TOKEN, NEWS_API_URL} from "../constants/config";
import date from "../utils/date";
import {Context} from "../index";

export default function Search() {
    const {state, dispatch} = useContext(Context)
    const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_TOKEN, NEWS_API_DAYS)// TODO вынести из поиска

    const fetchNews = (keyword) => {
        showLoader()
        newsApi.getNews(keyword)
            .then(res => res.json())
            .then(res => {
                console.log(res.articles)
                const articlesFromApi = res.articles
                const articles = []
                articlesFromApi.forEach(article => {
                    const obj = {
                        keyword: keyword,
                        title: article.title,
                        text: article.description,
                        date: date.cardDateTransform(article.publishedAt),
                        source: article.source.name,
                        link: article.url,
                        image: article.urlToImage
                    }
                    articles.push(obj)
                })
                console.log(articles)
                hideLoader()
                dispatch({type: 'GET_ARTICLES', payload: articles})
            })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const keyword = e.target.searchInput.value
        fetchNews(keyword)
        e.target.searchInput.value = ''
    }

    const showLoader = () => {
        dispatch({type: 'SHOW_LOADER'})
    }

    const hideLoader = () => {
        dispatch({type: 'HIDE_LOADER'})
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