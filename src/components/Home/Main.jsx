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
         <div className='grid_container'>
            <section className='rrss_container'>
                <h1>¡BIENVENIDOS!</h1>
                <h3>SIGUENOS EN NUESTRAS REDES SOCIALES!!</h3>
                <div className='rrss_subcontainer'>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/>
                    <p>barberiaelrusso</p>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/>
                        <p>barberiaelrusso</p>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/>
                        <p>barberiaelrusso</p>
                    </a>
                </div>
            </section>
            <button onClick={() => navigate('/appointment')} className='button_appointment'>Tomar Hora</button>
            <button onClick={() => navigate('/register')} className='button_register'>Registrarse</button>
            <button onClick={() => navigate('/survey')} className='button_survey'>Evaluar</button>
         </div>
         <Footer />
        </>
    )
}

export default Main
