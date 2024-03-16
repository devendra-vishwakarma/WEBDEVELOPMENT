import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Help">help</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Header