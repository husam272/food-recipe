
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../src/index.css";
import "../src/components/navbar.css";




import React from 'react';
import { NavLink } from 'react-router-dom';




function Navbar1() {
    return (
        // <div className='navbar1'>
            <Navbar className='navbar1' expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul className="">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" activeClassName='menu_active' exact aria-current="page"  to="/"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">Home</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>


                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" activeClassName='menu_active' exact aria-current="page"  to="/chicken"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">Chicken Recipe</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>


                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/biryani"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">Biryani Recipe</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/breakfast"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">BREAKFAST</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/lunch"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">Lunch Recipe</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Dinner"><a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text">Dinner Recipe</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a></NavLink>
                                </li>

                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        // </div>
    );
}

export default Navbar1;