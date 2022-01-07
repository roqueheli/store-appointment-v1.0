import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

function Navbar() {
    return (
        <nav class="topnav">
            <Link class="active" to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </nav>
    );
}

export default Navbar;
