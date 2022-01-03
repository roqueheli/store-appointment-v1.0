import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../Commons/Footer';
import Header from '../Commons/Header';
import '../../styles/register.css';

function Register() {
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <section className='form_container' method="post">
                <h1>Registro</h1>
                <form className='form_subcontainer'>
                    <label>Nombre
                        <input id='name' type='text' name='name' />
                    </label>
                    <label>Apellido
                        <input id='lastname' type='text' name='lastname' />
                    </label>
                    <label>Rut
                        <input id='countryid' type='text' name='countryid' pattern="[1-9]{8}-[A-Z0-9]{1}" required/>
                    </label>
                    <label>Fecha de cumpleaños
                        <input id='birthdate' type="text" />
                    </label>
                    <label>Correo electrónico
                        <input id='email' type="email" name='email' />
                    </label>
                    <label>Teléfono
                        <input id='phone' type="tel" name='phone' pattern="[0-9]{1}' '[0-9]{4}' '[0-9]{4}" required/>
                    </label>
                    <label>Instagram
                        <input id='mediauser' type="text" name='mediauser' />
                    </label>
                    <label>Acepto los términos
                        <input type="checkbox" />
                        <span></span>
                    </label>
                    <div>
                        <input type='submit' />
                        <button onClick={() => navigate('/')} type='cancel'>Cancelar</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Register;
