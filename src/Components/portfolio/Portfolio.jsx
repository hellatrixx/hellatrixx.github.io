import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/wordle.png'
import IMG2 from '../../assets/snake.png'
import IMG3 from '../../assets/binary.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>Wordle</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/hellatrixx/Wordle_Game" className='btn' target='_blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>Snake Retro Recreation</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/hellatrixx/Snake-Retro-Game" className='btn' target='_blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>Binary Search Implementation</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/hellatrixx/Simple-Binary-Search" className='btn' target='_blank'>GitHub</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio