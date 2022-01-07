import React from 'react';
import logobarber from '../../images/logo-barber.png';
import '../../styles/header.css';
import Navbar from './Navbar';

function Header() {   
    return (
        <header className='header_container'>
            <section className='logo_container'>
                <img src={logobarber} alt="" />
            </section>
            <section className='nav_container'>
                <Navbar />
            </section>
        </header>
    )
}

export default Header;
