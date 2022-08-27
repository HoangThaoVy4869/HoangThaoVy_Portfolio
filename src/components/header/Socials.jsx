import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import { RiMessengerFill } from 'react-icons/ri'

const Socials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/HoangThaoVy4869" target="_blank"><AiFillGithub /></a>
            <a href="mailto:hoangthaovybmt@gmail.com" target="_blank"><IoIosMail /></a>
            <a href="https://www.messenger.com" target="_blank"><RiMessengerFill /></a>
        </div>
    )
}

export default Socials