import React from "react";
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Designing & Building Software</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Experience with software design and development in a test-driven environment.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Ability to learn new languages and technologies.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>BSc in Computer Science & Software Engineering.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Experience with databases and Object-Relational Mapping frameworks.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF DESIGN & BUILD */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Create and test applications for websites.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Website and software application designing, building, and maintaining.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Determining user needs by analyzing technical requirements.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Developing test routines to ensure that test cases mimic external interfaces and address all browser and device types.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Researching industry-related topics.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Prepare well-structured drafts using digital publishing platforms.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Promote content on social networks and monitor engagement.</p>
                        </li>
                        <li>
                            <BsCheckAll className='service__list-icon'/>
                            <p>Hands-on experience with Content Management Systems.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services