import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandWhatsapp } from 'react-icons/tb'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hdueaxe', 'template_436f5ma', form.current, '6LmLSEk6Wb3tKQb_h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>hoangthaovybmt@gmail.com</h5>
                        <a href="mailto:hoangthaovybmt@gmail.com" target="_blank">Send a email</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Message</h4>
                        <h5>Hoang Thao Vy</h5>
                        <a href="https://www.messenger.com/t/100011498591149/" target="_blank">Send a messenger</a>
                    </article>
                    <article className="contact__option">
                        <TbBrandWhatsapp className="contact__option-icon" />
                        <h4>Phone+</h4>
                        <h5>0383365004</h5>
                        <a href="tel:0383365004" target="_blank">Call me</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" type="text" placeholder="Your message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact