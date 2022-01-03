import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../context/GlobalContext';

function User() {
    const { users, userSelected, setUserSelected, setGoService } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmitUser = (e) => {
        setGoService(true);
        e.preventDefault();
    }

    const handleUserSelected = (e) => {
        setUserSelected(e.target.value);
    }

    return (
        <section className='makeappointment_container'>
            <h1>Seleccionar usuario:</h1>
            <select onChange={handleUserSelected}  name="users" id="users">
                <option value="Seleccione">Seleccione</option>
                {users.map((user, index) => <option key={index} value={user.firstname}>{user.firstname}</option>)}
            </select>
            <p>Ha seleccionado: {userSelected}</p>
            <div>
                <button onClick={handleSubmitUser}>Confirmar</button>
                <button onClick={() => navigate('/')}>Cancelar</button>
            </div>
        </section>
    );
}

export default User;
