import React, {useContext} from "react"
import {Context} from "../state/context"
import {mainApi} from '../utils/MainApi'

export default function Article({article}) {
    const {state, dispatch} = useContext(Context)
    const path = state.currentPath

    const toggleSaveArticle = () => {
        if (article.isSaved) {
            mainApi.removeArticle(article._id)
                .then(res => res.json())
                .then(res => {
                    if (!res.message) {
                        const articlesArray = [...state.articles]
                        const newArticlesArray = articlesArray.map(item => {
                            if (item.index === article.index) {
                                item.isSaved = false
                                return item
                            }
                            return item
                        })
                        dispatch({type: 'TOGGLE_SAVE_ARTICLE', payload: newArticlesArray})
                    } else {
                        throw new Error(res.message)
                    }
                })
                .catch(e => console.error(e.message))
        } else {
            mainApi.createArticle(article)
                .then(res => res.json())
                .then(res => res.data)
                .then(res => {
                    const articlesArray = [...state.articles]
                    const newArticlesArray= articlesArray.map(item => {
                        if (item.index === article.index) {
                            item.isSaved = true
                            item._id = res._id
                            return item
                        }
                        return item
                    })
                    dispatch({type: 'TOGGLE_SAVE_ARTICLE', payload: newArticlesArray})
                })
                .catch(e => console.error(e.message))
        }
    }

    const deleteArticle = () => {
        const articlesArray = [...state.savedArticles]
        const newArticlesArray= articlesArray.filter(item => item._id !== article._id)
        mainApi.removeArticle(article._id)
            .then(res => res.json())
            .then(() => {
                dispatch({type: 'REMOVE_CARD', payload: newArticlesArray})
            })
            .catch(e => console.error(e))
    }

    return (
        path === '/'
            ?
            <div className="article" data-id={article._id || null}>
                {
                    state.user.isLoggedIn ?
                        article.isSaved  ?
                            <div className='article__icon article__icon_loggined article__icon_marked' onClick={toggleSaveArticle} />
                            :
                            <div className='article__icon article__icon_loggined' onClick={toggleSaveArticle}/>
                        :
                        <>
                            <div className='article__icon article__icon_not-loggined' />
                            <button className="btn__notice ">Войдите, чтобы сохранять статьи</button>
                        </>
                }
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
            <div className="article" data-id={article._id || null}>
                <div className='btn__delete' onClick={deleteArticle}/>
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