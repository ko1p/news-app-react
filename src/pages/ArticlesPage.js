import React, {useContext, useEffect} from "react";
import NoArticles from "../components/NoArticles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Context} from "../state/context";
import SavedArticles from "../components/SavedArticles";
import Popup from "../components/popups/Popup";

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