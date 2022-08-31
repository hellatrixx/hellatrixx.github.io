import React from "react";
import './nav.css'
import {RiHome4Fill} from 'react-icons/ri'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome4Fill /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillJournalBookmarkFill /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
        </nav>
    )
}

export default Nav