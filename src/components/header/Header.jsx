import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me7.png'
import Socials from './Socials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Hoang Thao Vy</h1>
                <h5 className="text-light">Fullstack Intern</h5>
                <CTA />
                <Socials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header