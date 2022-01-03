import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/goregister.css';

function GoRegister() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    }

    return (
        <>
            <section className='goregister_container'>
                <h1>Registrarse</h1>
                <div className='goregister_subcontainer'>
                    <button onClick={handleRegister}>Registrarse</button>
                    <button onClick={() => navigate('/')}>Cancelar</button>
                </div>
            </section>
        </>
    )
}

export default GoRegister;
