import React, {useContext} from "react";
import Article from "./Article";
import {Context} from "../index";

export default function ArticlesList() {
    const {state} = useContext(Context)
    console.log('articles', state.articles)
    return (
        state.articles ?
            <div className='articles-list'>
                {state.articles.map((article, index) => <Article key={`Article-${index}`} article={article} /> )}
            </div>
            :
            null
    )
}