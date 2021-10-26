import React from 'react';
import Footer from '../navbar/Footer';
import Navigation from '../navbar/Navbar';
import Topbar from '../navbar/Topbar';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Topbar />
        <Navigation />
        <div className="navigationWrapper">
            <main>{children}</main>
        </div>
        <Footer />
    </React.Fragment>
    );
};
export default Layout;