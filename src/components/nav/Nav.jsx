import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { RiServiceFill } from 'react-icons/ri'
import { TbMessages } from 'react-icons/tb'
import { useState } from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'

const Nav = () => {
    const [activeNav, sesActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => sesActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
            <a href="#about" onClick={() => sesActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => sesActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
            <a href="#project" onClick={() => sesActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiFillFolderOpen /></a>
            <a href="#contact" onClick={() => sesActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessages /></a>
        </nav>
    )
}

export default Nav