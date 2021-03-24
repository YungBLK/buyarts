// packages
import React from 'react';

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
                <li className="menu-item">Home</li>
                <li className="menu-item">Gallery</li>
                <li className="menu-item">Artists</li>
                <li className="menu-item">Login</li>
                <li className="menu-item">
                    <Button type="button" buttonClass="cta-primary" text=" Singing Up" />
                </li>
            </ul>
        </header>
    )
}

export default Header;
