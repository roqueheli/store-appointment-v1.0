import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from "react-router-dom";
import GoRegister from '../Appointment/GoRegister';
import '../../styles/appointment.css';

function CheckRegister() {
    const { registered, setGoAppoint, setRegistered } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setGoAppoint(true);
        setRegistered(!registered);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    }

    return (
        registered ?
           (<section className='appointment_container'>
                <h1>Tomar hora</h1>
                <label>Ingrese su Rut:
                    <input id='countryid' type='text' name='countryid' pattern="[1-9]{8}-[A-Z0-9]{1}" required/>
                </label>
                <div>
                    <button onClick={handleSubmit}>Aceptar</button>
                    <button onClick={() => navigate('/')}>Cancelar</button>
                    <button onClick={handleRegister}>Registrarse</button>
                </div>
            </section>): <GoRegister />
    )
}

export default CheckRegister;
