import React, {useContext, useEffect} from "react";
import HeaderCover from "../HeaderCover";
import Preloader from "../Preloader";
import NoArticles from "../NoArticles";
import SearchResults from "../SearchResults";
import Author from "../Author";
import Footer from "../Footer";
import Popup from "../Popup/Popup";
import {Context} from "../../index";

export default function MainPage (props) {
    const {dispatch} = useContext(Context)
    const path = props.location.pathname
    useEffect(() => {
        dispatch({type: 'SET_CURRENT_PATH', payload: path})
        // dispatch({type: 'CLEAR_SEARCH_RESULTS'})
    }, [path, dispatch]) // TODO подумать оставить так или добавить исключение в линтер

    return (
        <main className="page">
            <HeaderCover />
            <Preloader />
            <NoArticles />
            <SearchResults />
            <Author />
            <Footer />
            <Popup />
        </main>
    )
}