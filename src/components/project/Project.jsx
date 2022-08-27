import React from 'react'
import './project.css'
import IMG1 from '../../assets/github.png'
import IMG2 from '../../assets/github1.png'
import IMG3 from '../../assets/github2.png'
import IMG4 from '../../assets/github3.png'
import IMG5 from '../../assets/github4.png'
import IMG6 from '../../assets/github5.png'


const Project = () => {
    return (
        <section id="project">
            <h5>My Projects - And more on my Github</h5>
            <h2>Projects</h2>
            <div className="container project__container">
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG1} alt="image1" />
                    </div>
                    <h3>My Portfolio Website</h3>
                    <small>Website built with ReactJs, used to introduce myself as an online CV</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG2} alt="image2" />
                    </div>
                    <h3>E-Commerce Manager</h3>
                    <small>The system is built in PHP programming language, with full functions of ordering, purchasing, and searching. Authentication and authorization among users</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869/The_shop" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG3} alt="image1" />
                    </div>
                    <h3>Student Management</h3>
                    <small>The system is built in Python programming language, used to manage the number of students, subjects, grades. Authentication among users</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869/QLHS_Python" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG4} alt="image1" />
                    </div>
                    <h3>Puzzle Game</h3>
                    <small>The project uses Winform and the C# programming language. Players proceed to put the puzzle pieces into the frame according to the pattern</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869/GhepHinh" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG5} alt="image1" />
                    </div>
                    <h3>Cube Runner</h3>
                    <small>The project uses Unity and the C# programming language. The player controls the character to overcome obstacles</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869/Game_Unity_3" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

                <article className="project__item">
                    <div className="project__item-image">
                        <img src={IMG6} alt="image1" />
                    </div>
                    <h3>Hunting Games: Bird Shooting</h3>
                    <small>The project uses Unity and the C# programming language. Players proceed to shoot the animals to score the highest score in the allotted time</small>
                    <div className="project__item-cta">
                        <a href="https://github.com/HoangThaoVy4869/Game_Unity-1-" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Project 