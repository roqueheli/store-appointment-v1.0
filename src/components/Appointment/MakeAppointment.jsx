import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import User from './User';
import Service from './Service';
import '../../styles/appointment.css';

function MakeAppointment() {
    const { goService } = useContext(GlobalContext);

    return (
        !goService ? <User /> : <Service />
    )
}

export default MakeAppointment;
