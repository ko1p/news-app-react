import React from "react";
import HeaderCover from "../HeaderCover";
import Preloader from "../Preloader";
import NoArticles from "../NoArticles";
import Results from "../Results";
import Author from "../Author";
import Footer from "../Footer";
import Popup from "../Popup/Popup";

export default function MainPage (props) {
    const path = props.location.pathname
    return (
        <main className="page">
            <HeaderCover path={path} />
            <Preloader />
            <NoArticles />
            <Results />
            <Author />
            <Footer />
            <Popup />
        </main>
    )
}