import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/footer.css';

function Footer() {
    return (
        <footer className='footer_container'>
            <p className="footer_texto">2022 — Store Appointment ©</p>
            <section className="iconos_footer">
                <h4>FOLLOW US</h4>
                <ul className='social_links'>
                    <li><a href="https://www.spotify.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify}/></a></li> 
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram}/></a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;
