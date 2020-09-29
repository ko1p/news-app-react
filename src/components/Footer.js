import React from "react";
import gitHuBLogo from '../images/github.svg'
import faceBookLogo from '../images/fb.svg'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__links">
                <ul className="footer__nav">
                    <li className="footer__nav-item"><Link className="footer__link" to="/">Главная</Link></li>
                    <li className="footer__nav-item"><a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
                </ul>
                <div className="footer__social">
                    <a className="footer__social-link" href="https://github.com/ko1p"><img src={gitHuBLogo} alt="иконка github"/></a>
                    <a className="footer__social-link" href="https://www.facebook.com/anton.belko.5"><img src={faceBookLogo} alt="иконка facebook" /></a>
                </div>
            </div>
        </footer>
)
}