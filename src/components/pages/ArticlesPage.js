import React from "react";
import HeaderCover from "../HeaderCover";
import Preloader from "../Preloader";
import NoArticles from "../NoArticles";
import Results from "../Results";
import Footer from "../Footer";

export default function ArticlePage () {
    return (
        <main className="page">
            <HeaderCover />
            <h1>This is second page</h1>
            <NoArticles />
            <Results />
            <Footer />
        </main>
    )
}