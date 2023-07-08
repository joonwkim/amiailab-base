'use client'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    
    return (<>
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        {'AmiAiLab '}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Dashboard</Nav.Link>
                            <Nav.Link href="/todos">Todos</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <Nav.Link href="/dogs">Dogs</Nav.Link>
                            <Nav.Link href="/wiki">Get Wiki</Nav.Link>
                            <Nav.Link href="/me" className='disabled'>Disabled</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register"> Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
       
    </>


    )
}

export default Header