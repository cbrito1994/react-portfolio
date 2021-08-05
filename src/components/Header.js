import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            <h3>My React Portfolio</h3>
            <Link to="/">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    )
}

export default Header
