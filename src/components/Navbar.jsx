import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><Link to="/all">All</Link></li>
                <li><Link to="/full-stack-development">Full Stack Development</Link></li>
                <li><Link to="/data-science">Data Science</Link></li>
                <li><Link to="/cyber-security">Cyber Security</Link></li>
                <li><Link to="/career">Career</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
