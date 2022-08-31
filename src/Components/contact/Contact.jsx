import React from "react";
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2q7uhh9', 'template_zx7a0wp', form.current, 'Nz1bJOE8jRqmF-aNX')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>stilian.kolev.2020@mumail.com</h5>
                        <a href="mailto:stilian.kolev.2020@mumail.ie">Email Me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Stilian Kolev</h5>
                        <a href="https://www.linkedin.com/in/stilian-kolev-b51873227/">Message me on LinkedIn!</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact