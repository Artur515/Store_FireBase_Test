import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {PRODUCT_ADD, PRODUCT_EDIT, PRODUCT_LIST} from "../../utils/constants";

const NavBar = () => {
        const isAuth = false
        return isAuth ? (<Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Store</Navbar.Brand>
                    <Nav className="d-flex justify-content-between">
                        <Link to={PRODUCT_LIST} className='p-2'>Products</Link>
                        <Link to={PRODUCT_ADD} className='p-2'>Add</Link>
                        <Link to={PRODUCT_EDIT} className='p-2'>Edit</Link>
                    </Nav>
                    <Button variant='outline-light'>LogOut</Button>
                </Container>
            </Navbar>)
            : (<Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Store</Navbar.Brand>
                    <Button variant='outline-light'>Log In</Button>
                </Container>
            </Navbar>)
    }
;

export default NavBar;