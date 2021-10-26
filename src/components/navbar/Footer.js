import React from 'react';
import '../../css/Footer.css';

const Footer = () => {

    let curYr = new Date().getFullYear();

    return (
        <>
        <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">GVAU</h5>
                    <p className="small text-muted">Committed to educating and nurturing all students so they may grow towards responsible global citizenship..</p>
                    <p className="small text-muted mb-0">&copy; {curYr} Copyrights. All rights reserved. <a className="text-primary" href="/">gvau@gvau.in</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Social-links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/"><i className='fab fa-facebook'></i></a><span className="tex-secondary pl-2">Facebook</span></li>
                        <li><a href="/"><i className='fab fa-whatsapp'></i></a><span className="tex-secondary pl-2">Whatsapp</span></li>
                        <li><a href="/"><i className='fab fa-instagram'></i></a><span className="tex-secondary pl-2">Instagram</span></li>
                        <li><a href="/"><i className='fab fa-youtube'></i></a><span className="tex-secondary pl-2">Youtube</span></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/">Admission</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Schools are a great place to be, allowing you to interact with people from different cultures and backgrounds. Work together with people to accomplish more.</p>
                    <form action="/">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
};

export default Footer;