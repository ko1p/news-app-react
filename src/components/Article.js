import React, {useContext} from "react";
import {Context} from "../index";

export default function Article () {
    const {state, dispatch} = useContext(Context)
    return (
        <div className="article">
            {/*<button className="article__icon"></button>*/}
            {/*/!*Чтобы установить кнопке статус "marked" добавить класс btn__save_marked / btn__save_not-login  *!/*/}
            {/*<button className="btn__notice ">Войдите, чтобы сохранять статьи</button>*/}
            {/*<button className="btn__keyword ">Keyword</button>*/}
            {/*{*/}
            {/*    state.user.isLoggedIn ?*/}
            {/*        <button className="article__icon"></button>*/}
            {/*        :*/}
            {/*        <>*/}
            {/*            <button className="article__icon btn__save_not-login"></button>*/}
            {/*            <button className="btn__notice ">Войдите, чтобы сохранять статьи</button>*/}
            {/*        </>*/}
            {/*}*/}
            <a className="article__link" href="https://nat-geo.ru/nature/lesnye-ogonki-istoriya-odnoj-fotografii/"
               target="_blank">
                <div className="article__image"></div>
                <div className="article__container>">
                    <p className="article__date">2 августа, 2019</p>
                    <h3 className="article__heading">Лесные огоньки: история одной фотографии</h3>
                    <p className="article__text">Фотограф отвлеклась от освещения суровой политической реальности
                        Мексики, чтобы запечатлеть ускользающую красоту одного
                        из местных чудес природы.</p>
                </div>
                <p className="article__source">Медуза</p>
            </a>
        </div>
    )
}