import React from 'react'
import './Header.css'

import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <header className='main'>
        <nav className="container navbar w100">
            <a href="/"><span className="logo">TextPrep AI</span></a>
            <a href="https://www.github.com/Rutikj9284"><span className="headericon"><FaGithub /></span></a>
        </nav>
    </header>
    </>
  )
}

export default Header