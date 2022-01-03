import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../Commons/Footer';
import Header from '../Commons/Header';
import '../../styles/survey.css';

function Survey() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <section className='survey_container'>
                <h1>Survey</h1>
                <div className='survey_subcontainer'>
                    <input type='submit' />
                    <button onClick={() => navigate('/')} type='cancel'>Cancelar</button>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Survey;