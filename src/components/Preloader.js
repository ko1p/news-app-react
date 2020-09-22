import React from "react";

export default function Preloader () {
    return (
        <div className="preloader ">
            <i className="circle-preloader"></i>
            <p className="preloader__text">Идет поиск новостей...</p>
        </div>
    )
}