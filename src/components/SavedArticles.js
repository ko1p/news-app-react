import React, {useContext, useEffect} from "react";
import ArticlesList from "./ArticlesList";
import {Context, mainApi} from "../index";

export default function SavedArticles() {
    const {state, dispatch} = useContext(Context)
    const keywordsResultMessage = () => {
        let message
        const savedArticles = state.savedArticles
        const keywordsArr = savedArticles.map(article => article.keyword)

        const keywordsResult = keywordsArr.reduce((acc, keyword) => {
            if (acc[keyword]) {
                acc[keyword] += 1;
            } else {
                acc[keyword] = 1;
            }
            return acc;
        }, {});

        const array = Object.entries(keywordsResult).sort((a, b) => b[1] - a[1])

        if (array.length <= 3) {
            let keywords = '';
            array.forEach((keyword) => {
                keywords += `${keyword[0]}, `;
            });
            message = keywords.slice(0, -2);
        }

        if (array.length > 3) {
            message = `${array[0][0]}, ${array[1][0]} и ${array.length - 2} другим`;
        }

        return message
    }

    useEffect(() => {
        mainApi.getArticles()
            .then(res => res.json())
            .then(res => {
                dispatch({type: 'GET_SAVED_ARTICLES', payload: res.data})
            })
            .catch(e => console.error(e))
    }, [dispatch]) // TODO подумать, обавлять список зависимостей или исклчение в линтер


    return (
        <section className="results results_is-opened">
            <div className="results__info">
                <p className="results__reference">Сохранённые статьи</p>
                <h2 className="results__title">У вас {

                    state.savedArticles.length === 0 ?
                        'нет'
                        :
                        state.savedArticles.length} сохранённых статей</h2>
                {
                    state.savedArticles.length === 0 ?
                        null
                        :
                        <p className="results__keywords">По ключевым словам: {keywordsResultMessage()}</p>
                }
            </div>
            <ArticlesList articles={state.savedArticles}/>
        </section>
    )
}