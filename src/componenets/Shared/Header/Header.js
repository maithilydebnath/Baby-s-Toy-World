import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';

// import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar className="theme-color"   sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home"><b>Baby's Toy World</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link as={HashLink} to="/home#home"><b>Home</b></Nav.Link>
                                {/* <Nav.Link as={HashLink} to="/home#products"><b>Explore</b></Nav.Link> */}
                                {/* <Nav.Link as={Link} to="/addPlace">Add Place</Nav.Link> */}
                                <Nav.Link as={Link} to="/explore"> <b>Explore</b> </Nav.Link>
                                {/* <Nav.Link as={Link} to="/features">Features</Nav.Link>
                                <Nav.Link as={Link} to="/manageAllOrders">ManageAllOrders</Nav.Link>
                                <Nav.Link as={Link} to="/myOrders">MyOrders</Nav.Link> */}



                                {user?.email ?
                                <div className='d-flex'> 
                                    <Nav.Link as={Link} to="/dashboard"><b>Dashboard</b></Nav.Link>
                                    <Button onClick={logout} variant="light">Logout</Button> 
                                </div>    
                                    :<Nav.Link as={Link} to="/login"> <b>Login</b> </Nav.Link>}

                                <Navbar.Text>
                                    <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;