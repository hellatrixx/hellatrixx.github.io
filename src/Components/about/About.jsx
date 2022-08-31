import React from "react";
import './about.css'
import ME from '../../assets/BLACK TURTLE SK PNG.png'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <RiAwardFill className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Experience</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ WorldWide</small>
                        </article>

                        <article className='about__card'>
                            <AiFillProject className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Aliquam aliquid doloremque, eaque esse fugit quo recusandae vitae.
                       Ab delectus ipsam libero maxime provident. Aliquid architecto, delectus doloremque hic repellendus sint.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
                </div>
            </div>
        </section>
    )
}

export default About