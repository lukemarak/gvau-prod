import React from 'react';
import Header from '../navbar/Header';
import '../../css/Contact.css';
// import { Form, Row, Col, Button } from 'react-bootstrap';


const Contact = () => {
    return (
        <>
        <Header />
        <React.Fragment>
        </React.Fragment>
            <div className="container">
                <div className="lead-text">
                    <h1>Contact us</h1><hr />
                    <div className="row" style={{'background':'#ccffcc'}}>
                        <div className="col-md-6 col-sm-12">
                            <div className="address-section">
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex align-items-start">
                                        <i className='fas fa-map-marked-alt' style={{'padding': '20px'}}></i>
                                    </div>
                                    <div className="office-address" style={{'padding': '15px'}}>
                                        <h5>Office address</h5>
                                        <h6>Grace Valley Academy</h6>
                                        <p>Umshek, Meghalaya</p>
                                        <p>Pincode-793102</p>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex align-items-start">
                                        <i className='fas fa-phone-alt' style={{'padding': '20px'}}></i>
                                    </div>
                                    <div className="phone" style={{'padding': '15px'}}>
                                    <h5>(+91)-9182736450</h5>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex align-items-start" >
                                        <i className='fas fa-mail-bulk' style={{'padding': '20px'}}></i>
                                    </div>
                                    <div className="email" style={{'padding': '15px'}}>
                                        <h5>gvau@gmail.com</h5>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex align-items-start">
                                        <i className='far fa-clock' style={{'padding': '20px'}}></i>
                                    </div>
                                    <div className="timing" style={{'padding': '15px'}}>
                                    <h5>Office time</h5>
                                    <p>From 9.00 a.m - 5.00 p.m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="divider"></span>
                        <div className="col-md-6 col-sm-12 pt-2">
                            <div className="form-section" style={{'padding':'10px'}}>
                                <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="fullname" class="form-label">Full Name</label>
                                            <input type="text" class="form-control" id="fullname" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="subject" class="form-label">Subject</label>
                                            <input type="text" class="form-control" id="subject" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="phoneno" class="form-label">Phone No</label>
                                            <input type="text" class="form-control" id="phoneno" />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="message" class="form-label">Message</label>
                                            <textarea class="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-success">Submit</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;