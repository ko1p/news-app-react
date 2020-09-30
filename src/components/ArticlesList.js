import React, {useContext} from "react";
import Article from "./Article";
import {Context} from "../index";

export default function ArticlesList({articles}) {
    const {state} = useContext(Context)
    return (
        articles ?
            <>
                <div className='articles-list'>
                    {
                        articles.map((article, index) => <Article key={`Article-${index}`} article={article}/>)
                    }
                </div>
                {
                    state.currentPath === '/'
                        ?
                        <button className="btn results__more-btn">Показать ещё</button>
                        :
                        null
                }
            </>
            :
            null
    )
}