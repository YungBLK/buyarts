// packages
import React from 'react';
import {
    Link,
    BrowserRouter as Router,
  } from "react-router-dom";

// styles
import './header.scss';

// parts
import Button from '../../components/Button';

function Header() {
    return (
        <header className="header-menu">
            <div className="logo-wrap">
                <h1>Artisty</h1>
            </div>
            <ul className="menu">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
                <li className="menu-item"><Link to="/artists">Artists</Link></li>
                <li className="menu-item"><Link to="/login">Login</Link></li>
                <li className="menu-item">
                    <Link to="/login">
                        <Button type="button" buttonClass="cta-primary" text=" Singing Up" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
