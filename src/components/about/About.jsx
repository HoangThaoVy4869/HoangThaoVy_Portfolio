import React from 'react'
import './about.css'
import ME from '../../assets/ngaos.png'
import { FaAward } from 'react-icons/fa'
import { FaRunning } from 'react-icons/fa'
import { AiFillFolder } from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>4nd-yeard student</small>
                        </article>

                        <article className="about__card">
                            <FaRunning className="about__icon" />
                            <h5>Competition</h5>
                            <small>Two contests</small>
                        </article>

                        <article className="about__card">
                            <AiFillFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small>15+ Completed!!</small>
                        </article>
                    </div>

                    <p> - Good self-study ability, hardworking, progressive in work. <br />
                        - Read and understand some documents written in English.<br />
                        - Energetic, sociable, good teamwork ability <br />
                        - Having strengths in designing website projects such as e-commerce, product , students management,...
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contact with me!!!</a>
                </div>
            </div>
        </section>
    )
}

export default About