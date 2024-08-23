import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "../Styles/Home.css";
import { Link } from 'react-scroll';

const Home = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
    
  };

  return (
    <div className="home-container" id="home">
      <div className="home-background">
        <Navbar expand="lg" variant="light" className="navbar-custom">
          <Container>
            <Navbar.Brand className="text-white mt-3">MY PORTFOLIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-basic" onClick={handleToggle} className="d-lg-none" />
            <Navbar.Collapse id="navbar-basic" className="d-none d-lg-flex">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link-custom">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="projects" smooth={true} duration={500} className="nav-link-custom">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="skills" smooth={true} duration={500} className="nav-link-custom">
                  Skills
                </Nav.Link>
                <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-link-custom">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="nav-link-custom">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={closeOffcanvas}
          className="offcanvas-custom d-lg-none"
         
        >
          <Offcanvas.Header closeButton>
            <Navbar.Brand className="text-white mt-3">MY PORTFOLIO</Navbar.Brand>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link-custom" onClick={closeOffcanvas}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="projects" smooth={true} duration={500} className="nav-link-custom" onClick={closeOffcanvas}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="skills" smooth={true} duration={500} className="nav-link-custom" onClick={closeOffcanvas}>
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-link-custom" onClick={closeOffcanvas}>
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="nav-link-custom" onClick={closeOffcanvas}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className={`gradient-overlay ${showOffcanvas ? 'show' : ''}`} />

        <div className="bio-section">
          <h1 className="text-center">I'm Urvashi Kachaliya</h1>
          <p className="text-center btn-desig">FRONT-END DEVELOPER</p>
          <div className="bio-btn text-center">
            <Link to="projects" smooth={true} duration={500}>
              <button className="mx-2 btn-one">PROJECTS</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="mx-2 btn-two">CONTACT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
