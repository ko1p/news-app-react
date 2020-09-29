import React from "react";
import HeaderCover from "../HeaderCover";
import Preloader from "../Preloader";
import NoArticles from "../NoArticles";
import Results from "../Results";
import Author from "../Author";
import Footer from "../Footer";
import Popup from "../Popup/Popup";

export default function MainPage () {
    return (
        <main className="page">
            <HeaderCover />
            <Preloader />
            <NoArticles />
            <Results />
            <Author />
            <Footer />
            <Popup />
        </main>
    )
}