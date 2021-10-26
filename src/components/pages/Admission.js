import React from 'react';
import Header from '../navbar/Header';
import { Link } from 'react-router-dom';
import '../../css/Admission.css';

const Admission = () => {
    let curYr = new Date().getFullYear();
    let nxtYr = curYr + 1;
    return (
        <>
        <Header />
        <div className="container">
            <div className="lead-text">
                <h1>Admission</h1><hr />
                <h4>Admission {nxtYr}</h4>
                <ul>
                    <li>Admission for academic year {nxtYr} will start from the month of December {curYr}</li>
                </ul>
                <h4>Procedure</h4>
                <ul>
                    <li>Get application form from office or download it here <Link to="../../../forms/admission-form.pdf" target="_blank" download>Admission form</Link>.</li>
                    <li>Fill up the application form and submit at the school office.</li>
                    <li>Download fee structure from here <a href="/fee-structure" target='_blank'>Fee Structure</a>.</li>
                    <li>Download prospectus from here <a href="/prospectus" target='_blank'>Prospectus</a>.</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Admission;