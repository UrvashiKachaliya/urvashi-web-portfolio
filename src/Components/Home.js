import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "../Styles/Home.css"; 

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
        <Navbar expand="lg" className="navbar-custom py-3">
          <Container>
            <h3 className="text-white mt-1">MY PORTFOLIO</h3>
            {/* Navbar Toggle for small screens */}
            <Navbar.Toggle aria-controls="navbar-basic" onClick={handleToggle} className="d-lg-none" />
            
            {/* Regular Navbar Collapse for large screens */}
            <Navbar.Collapse id="navbar-basic" className="d-none d-lg-flex">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link-custom text-white fs-4 px-3">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="projects" smooth={true} duration={500} className="nav-link-custom text-white fs-4 px-3">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="skills" smooth={true} duration={500} className="nav-link-custom text-white fs-4 px-3">
                  Skills
                </Nav.Link>
                <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-link-custom text-white fs-4 px-3">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="nav-link-custom text-white fs-4 px-3">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Offcanvas Menu for mobile */}
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

        {/* Overlay when Offcanvas is shown */}
        <div className={`gradient-overlay ${showOffcanvas ? 'show' : ''}`} />

        {/* Bio Section */}
        <div className="bio-section">
          <Container className="text-center bio-container">
            <h1 className="bio-heading">HELLO,</h1>

            <h1 className="bio-name-head">I'm Urvashi Kachaliya</h1>

            <p className="bio-role">REACTJS FRESHER</p>

            <button className="bio-btn">MORE ABOUT ME</button>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
