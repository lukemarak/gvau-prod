import React from 'react';
// import { Container, Navbar, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import '../../css/Navbar.css';
import logo from '../../images/logofirst.png';
import text from '../../images/lot.png';

const Navigation = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <div className="logo">
                      <a href='/'><img src={logo} alt="logo" width="50" /><img src={text} alt="text" width="200" /></a>
                </div>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>                
                    <li><a href="/admission">Admission</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;

// function OffCanvasExample({ name, ...props }) {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <span className="navbar-toggler-icon" onClick={handleShow}></span>
//         <Offcanvas show={show} onHide={handleClose} {...props} className="canvasOffStyle" >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title><img src={logo} alt="logo" width="50" /></Offcanvas.Title>
//           </Offcanvas.Header>
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <NavDropdown title="Features" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
          
//         </Offcanvas>
//       </>
//     );
//   }

// const Navigation = () => {

    

//     return (
//         <>
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//             <Navbar.Brand href="/"><img src={logo} alt="logo" width="70" height="90"/>
//               <span className="text-warning" style={{fontSize:"30px"}}>G</span >race<span className="text-warning" style={{fontSize:"30px"}}>A</span>cademy 
//             </Navbar.Brand>
            
//             <div className="mobileMenu">
//             {['top'].map((placement, idx) => (
//                 <OffCanvasExample key={idx} placement={placement} name={placement} />
//             ))}
//             </div>
            
            
//             <Navbar.Collapse className="desktopMenu">
//             <Nav className="me-auto">
//                 <Nav.Link href="/about">ABOUT</Nav.Link>
//                 <Nav.Link href="/contact">CONTACT</Nav.Link>
//                 <NavDropdown title="FEATURES" id="collasible-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown>
//                 </Nav>
//                 <Nav>
//                 <Button variant="warning">ADMISSION</Button>
//                 {/* <Nav.Link eventKey={2} href="#memes">
//                     ENQUIRY
//                 </Nav.Link> */}
//                 </Nav>
//             </Navbar.Collapse>
//             </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Navigation;