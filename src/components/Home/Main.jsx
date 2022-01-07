import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/main.css';

function Main() {
    const navigate = useNavigate();

    return (
        <>
         <Header />
         <main role='main' className='grid_container'>
            <section className='rrss_container'>
                <h1>¡BIENVENIDOS!</h1>
                <h3>FOLLOW US</h3>
                <div className='rrss_subcontainer'>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/>
                    <p>barberia</p>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/>
                        <p>barberia</p>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/>
                        <p>barberia</p>
                    </a>
                </div>
            </section>
            <button onClick={() => navigate('/appointment')} className='button_appointment glow-on-hover'>Tomar Hora</button>
            <button onClick={() => navigate('/register')} className='button_register glow-on-hover'>Registrarse</button>
            <button onClick={() => navigate('/survey')} className='button_survey glow-on-hover'>Evaluar</button>
         </main>
         <Footer />
        </>
    )
}

export default Main
