import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img
                        src={logo}
                        className="d-inline-block align-top logo-fluid"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='res-align-center'>
                                <Nav.Link className='p-relative me-4 res-me-null' ><span className='fs-4'><AiOutlineShoppingCart /></span><span className='cartAmountBadge'>0</span></Nav.Link>
                            </div>
                            <Nav.Link as={Link} to='/login' className='me-2 res-me-null my-2 py-2 px-4 simple-border fw-bold res-align-center'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/register' className='py-2 px-4 my-2 text-white primary-btn ms-2 res-ms-null res-align-center' >Sign Up</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;