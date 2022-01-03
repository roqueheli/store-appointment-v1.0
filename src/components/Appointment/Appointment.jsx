import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Footer from '../Commons/Footer';
import Header from '../Commons/Header';
import CheckRegister from './CheckRegister';
import MakeAppointment from './MakeAppointment';
import '../../styles/appointment.css';

function Appointment() {
    const { goAppoint } = useContext(GlobalContext);

    return (
        <>
            <Header />
            {!goAppoint ? <CheckRegister /> : <MakeAppointment />}
            <Footer />
        </>
    )
}

export default Appointment;