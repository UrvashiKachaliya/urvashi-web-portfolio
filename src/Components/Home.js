import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Styles/Home.css";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div className="home-container" id="#home">
      <div className="home-background">
        <Navbar expand="lg" variant="light" className="navbar-custom">
          <Container>
            <h3 className="text-white mt-3">MY PORTFOLIO</h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home active" className="nav-link-custom">
                  Home
                </Nav.Link>
                <Nav.Link href="#projects" className="nav-link-custom">
                  Projects
                </Nav.Link>
                <Nav.Link href="#skills" className="nav-link-custom">
                  Skills
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link-custom">
                  About Me
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-link-custom">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>

       
        </div>
        <div className="bio-section">
        <h1 className="text-center">I'm Urvashi Kachaliya</h1>
        <p className="text-center btn-desig" >FRONT-END DEVELOPER</p>
        <div className="bio-btn text-center ">

<Link to="projects" smooth={true} duration={500}>
              <button className="mx-2 btn-one">PROJECTS</button>
            </Link>  
            <Link to="contact" smooth={true} duration={500}>
            <button className="mx-2 btn-two">CONTACT</button></Link>  
                

        </div>
      
      </div>
      
      </div>
      
    </div>
  );
};

export default Home;
