import React from "react";
import NoArticles from "../NoArticles";
import Footer from "../Footer";
import Header from "../Header";

export default function ArticlePage (props) {
    const path = props.location.pathname
    return (
        <main className="page">
            <Header path={path}/>
            <NoArticles />
            <Footer />
        </main>
    )
}