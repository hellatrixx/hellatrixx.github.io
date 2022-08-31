import React from "react";
import './header.css'
import CTA from "./CTA";
import LOGO from "../../assets/BLUE TURTLE SK PNG.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I am</h5>
                <h1>Stilian Kolev</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={LOGO} alt="logo"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header