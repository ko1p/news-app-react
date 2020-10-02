import React, {useContext, useEffect} from "react";
import NoArticles from "../NoArticles";
import Footer from "../Footer";
import Header from "../Header";
import {Context} from "../../index";
import SavedArticles from "../SavedArticles";
import Popup from "../Popup/Popup";

export default function ArticlePage (props) {
    const {dispatch} = useContext(Context)
    const path = props.location.pathname

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_PATH', payload: path})
    }, [path, dispatch]) // TODO подумать оставить так или добавить исключение в линтер

    return (
        <main className="page">
            <Header />
            <SavedArticles />
            <NoArticles />
            <Popup />
            <Footer />
        </main>
    )
}