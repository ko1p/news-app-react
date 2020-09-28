import React, {useContext, useState} from "react";
import {Context, mainApi} from "../index";

export default function Article ({article}) {
    const cls = []
    const [isArticleSave, setIsArticleSave] = useState(false)
    const [cardId, setCardId] = useState('')
    const {state, dispatch} = useContext(Context)

    const toggleSaveArticle = () => {
        if (cardId) {
            mainApi.removeArticle(cardId)
                .then(res => res.json())
                .then(res => {
                    setCardId('')
                    setIsArticleSave(prevState => !isArticleSave)
                })
        } else {
            mainApi.createArticle(article)
                .then(res => res.json())
                .then(res => res.data)
                .then(res => {
                    setCardId(res._id)
                    setIsArticleSave(prevState => !isArticleSave)
                })
                .catch(e => console.error(e.message))
        }
    }



    const classes = {
        loggined: ['article__icon', 'article__icon_loggined'],
        notLoggined: ['article__icon', 'article__icon_not-loggined'],
        marked: ['article__icon_marked']
    }

    if (state.user.isLoggedIn) {
        cls.push(classes.loggined)
    } else {
        cls.push(classes.notLoggined)
    }

    return (
        <div className="article" data-id={cardId || null}>
            {
                isArticleSave ?
                    <div className={cls[0].concat(classes.marked).join(' ')} onClick={toggleSaveArticle} />
                    :
                    <div className={cls[0].join(' ')} onClick={toggleSaveArticle} />
            }
            <button className="btn__notice ">Войдите, чтобы сохранять статьи</button>
            <button className="btn__keyword ">{article.keyword}</button>
            <a className="article__link" href={article.link}
               target="_blank">
                <div style={{backgroundImage: `url(${article.image})`}} className="article__image" />
                <div className="article__container>">
                    <p className="article__date">{article.date}</p>
                    <h3 className="article__heading">{article.title}</h3>
                    <p className="article__text">{article.text}</p>
                </div>
                <p className="article__source">{article.source}</p>
            </a>
        </div>
    )
}