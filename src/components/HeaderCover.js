import React from "react";
import Header from "./Header";
import Search from "./Search";

export default function HeaderCover({path}) {
    return (
        <section className="header-cover">
            <Header />
            <Search />
        </section>
    )
}

