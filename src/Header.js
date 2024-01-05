import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './App.css';
import Logo from './logo.png';
export default function Header() {
  return (
      <section >
          <div className='row'>
              <div className='col-lg-5'>
                  <img className="logo" src={Logo}></img>
              </div>
              <div className='col-lg-7'>
                  <Navbar expand="lg" className="bg-body-tertiary">
                      <Container>
                          <Navbar.Brand href="#home"><i class="fa fa-home"></i></Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                  <Nav.Link href="#home">Company</Nav.Link>
                                  <Nav.Link href="#link">Our work</Nav.Link>
                                  <NavDropdown title="services" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.2">
                                          action1
                                      </NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.3">action2</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="#action/3.4">
                                          action3
                                      </NavDropdown.Item>
                                  </NavDropdown>
                                  <NavDropdown title="Hire" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.2">
                                          action1
                                      </NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.3">action2</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="#action/3.4">
                                          action3
                                      </NavDropdown.Item>
                                  </NavDropdown>
                                  <Nav.Link href="#hiring!">We ARE HIRING!</Nav.Link>
                                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                                  <button className='va1 '>
                                      Request A Quote
                                  </button>
                              </Nav>

                          </Navbar.Collapse>
                      </Container>
                  </Navbar>
              </div>
          </div>
      </section>
  )
}
