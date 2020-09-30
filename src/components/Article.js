import React, {useContext, useState} from "react";
import {Context, mainApi} from "../index";

export default function Article({article}) {
    const {state} = useContext(Context)
    const path = state.currentPath
    const cls = []
    const [isArticleSave, setIsArticleSave] = useState(false)
    const [isArticleDelete, setIsArticleDelete] = useState(false)
    const [cardId, setCardId] = useState('')

    const toggleSaveArticle = () => {
        if (cardId) {
            mainApi.removeArticle(cardId)
                .then(res => res.json())
                .then(res => {
                    setCardId('') // TODO продумать, переделать на article._id
                    setIsArticleSave(prevState => !isArticleSave)
                })
                .catch(e => console.error(e.message))
        } else {
            mainApi.createArticle(article)
                .then(res => res.json())
                .then(res => res.data)
                .then(res => {
                    setCardId(res._id) // TODO продумать
                    setIsArticleSave(prevState => !prevState)
                })
                .catch(e => console.error(e.message))
        }
    }

    const deleteArticle = () => {
        const cardId = article._id
        mainApi.removeArticle(cardId)
            .then(res => res.json())
            .then(res => {
                setIsArticleDelete(prevState => !prevState)
            })
            .catch(e => console.error(e))
    }

    if (state.user.isLoggedIn) {
        if (path === '/articles') {
            cls.push('btn__delete')
        } else {
            cls.push('article__icon article__icon_loggined')
        }
    } else {
        cls.push('article__icon article__icon_not-loggined')
    }

    return (
        path === '/'
            ?
            <div className="article" data-id={cardId || null}>
                {
                    isArticleSave ?
                        <div className={cls.concat('article__icon_marked').join(' ')} onClick={toggleSaveArticle}/>
                        :
                        <div className={cls.join(' ')} onClick={toggleSaveArticle}/>
                }
                <button className="btn__notice ">Войдите, чтобы сохранять статьи</button>
                <a className="article__link" href={article.link} rel="noopener noreferrer"
                   target="_blank">
                    <div style={{backgroundImage: `url(${article.image})`}} className="article__image"/>
                    <div className="article__container>">
                        <p className="article__date">{article.date}</p>
                        <h3 className="article__heading">{article.title}</h3>
                        <p className="article__text">{article.text}</p>
                    </div>
                    <p className="article__source">{article.source}</p>
                </a>
            </div>
            :
            isArticleDelete ? null :
            <div className="article" data-id={article._id || null}>
                <div className={cls.join(' ')} onClick={deleteArticle}/>
                <button className="btn__keyword ">{article.keyword}</button>
                <a className="article__link" href={article.link} rel="noopener noreferrer"
                   target="_blank">
                    <div style={{backgroundImage: `url(${article.image})`}} className="article__image"/>
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