import React, {useContext, useEffect} from "react";
import HeaderCover from "../components/HeaderCover";
import Preloader from "../components/Preloader";
import SearchResults from "../components/SearchResults";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Popup from "../components/popups/Popup";
import {Context} from "../state/context";

export default function MainPage (props) {
    const {dispatch} = useContext(Context)
    const path = props.location.pathname // TODO переделать на хук
    useEffect(() => {
        dispatch({type: 'SET_CURRENT_PATH', payload: path})
    }, [path, dispatch]) // TODO подумать оставить так или добавить исключение в линтер

    return (
        <main className="page">
            <HeaderCover />
            <Preloader />
            <SearchResults />
            <Author />
            <Footer />
            <Popup />
        </main>
    )
}