import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../context/GlobalContext';


function Service() {
    const { services, serviceSelected, setServiceSelected } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmitService = (e) => {
        e.preventDefault();
    }

    const handleServiceSelected = (e) => {
        setServiceSelected(e.target.value);
    }

    return (
        <section className='makeappointment_container'>
            <h1>Seleccionar servicio:</h1>
            <select onChange={handleServiceSelected}  name="services" id="services">
                <option value="Seleccione">Seleccione</option>
                {services.map(({service}, index) => <option key={index} value={service}>{service}</option>)}
            </select>
            <p>Ha seleccionado: {serviceSelected}</p>
            <div>
                <button onClick={handleSubmitService}>Confirmar</button>
                <button onClick={() => navigate(0)}>Cancelar</button>
            </div>
        </section>
    );
}

export default Service;
