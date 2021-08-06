import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="AboutMe" onClick= {()=>props.setPage(props.components[0])}>About Me</Nav.Link>
              <Nav.Link href="Contact"onClick= {()=>props.setPage(props.components[0])}>Contact</Nav.Link>
              <Nav.Link href="Projects"onClick= {()=>props.setPage(props.components[0])}>Projects</Nav.Link>
              <Nav.Link href="Resume"onClick= {()=>props.setPage(props.components[0])}de>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}