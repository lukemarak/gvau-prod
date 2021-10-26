import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Layout from '../layout/Layout';
import Admission from './Admission';

const Index = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component= {Home} />
                <Route path = "/about" component = {About} />
                <Route path = "/contact" component = {Contact} />
                <Route path = "/admission" component = {Admission} />
            </Layout>
        </Router>
    );
};

export default Index;