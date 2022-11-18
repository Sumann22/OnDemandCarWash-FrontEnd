import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.svg';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../helpers/userHelper';


function Header() {
    const currentUser = getCurrentUser();

    // function handleLogout() {
    //     window.localStorage.removeItem('user');

    // }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid style={{ height: '100px' }}>
                    <Navbar.Brand href="#home">
                        <span style={{ margin: '0 50px', marginTop: '10px' }}>
                            <img
                                src={logo}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </span>
                    </Navbar.Brand>
                    <Navbar.Brand href="#">Green Car Wash</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="">
                                <Link to='/home'>Home</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="">
                                {currentUser && <Link to='/' onClick={handleLogout}>Logout</Link>} {!currentUser && 
                                <Link to='/login'>Login</Link>
                            </Nav.Link> */}
                            <NavDropdown title="Our Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="">
                                    <Link to='/WashPackages'>Services</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Other Programs</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="">
                                <Link to='/dashboard'>Admin Dashboard</Link>
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success">
                                <Link to='/login'>Login</Link>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;