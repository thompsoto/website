import React from 'react';
import '../assets/styles.css';

const NavBar = () => {
    return (
        <>
            <h1 className='navbar-logo'>MTS</h1>
            <ul className="navbar">
                <li className="navbar-item"><a href="#about" className='navbar-link'>About</a></li>
                <li className="navbar-item"><a href="#services" className='navbar-link'>Projects</a></li>
                <li className="navbar-item"><a href="#contact" className='navbar-link'>Contact</a></li>
            </ul>
        </>
    );
};

export default NavBar;