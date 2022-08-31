import React from 'react';
import {SiLinkedin} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {GrDribbble} from 'react-icons/gr'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/stilian-kolev-b51873227/" target="_blank"><SiLinkedin /></a>
            <a href="https://github.com/hellatrixx" target="_blank"><FaGithub /></a>
            <a href="https://dribbble.com/" target="_blank"><GrDribbble /></a>
        </div>
    );
}

export default HeaderSocials;