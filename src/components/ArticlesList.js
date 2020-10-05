import React, {useContext} from "react";
import Article from "./Article";
import {Context} from "../index";

export default function ArticlesList({articles}) {
    const {state, dispatch} = useContext(Context)

    const showMoreArticles = () => {
        dispatch({type: 'SHOW_MORE_ARTICLES'})
    }

    return (
        articles ?
            <>
                <div className='articles-list'>
                    {
                        articles.map((article, index) => {
                            if (index <= state.results.numOfRenderedCards - 1) {
                                return <Article key={`Article-${index}`} article={article}/>
                            } else {
                                return null
                            }
                        })
                    }
                </div>
                {
                    state.currentPath === '/'
                        ?
                        <button className="btn results__more-btn" onClick={showMoreArticles}>Показать ещё</button>
                        :
                        null
                }
            </>
            :
            null
    )
}