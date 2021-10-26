import React from 'react';
import Header from '../navbar/Header';
import '../../css/About.css';

const About = () => {
    return (
        <>
        <Header />
        <div className="container">
            <div className="lead-text">
                <h1>About Us</h1>
                <p>The Grace Valley School prepares students to understand, contribute to, and succeed in a rapidly changing society, thus making the world a better and more just place. We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</p>
            </div>
        </div>
        </>
    );
};

export default About;