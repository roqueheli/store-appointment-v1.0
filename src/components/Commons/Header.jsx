import React from 'react';
import logobarber from '../../images/logo-barber.png';
import '../../styles/header.css';

function Header() {   
    return (
        <header className='header_container'>
            <div className='logo_container'>
                <img src={logobarber} alt="" />
            </div>
            <nav className='nav_container'>
                Menu
            </nav>
        </header>
    )
}

export default Header;
