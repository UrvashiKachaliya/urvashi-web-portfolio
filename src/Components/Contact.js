import React, { useRef } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import "../Styles/Contact.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submission prevented'); // Debugging line

    emailjs.sendForm(
      'service_wrenh4d', // Your Service ID
      'template_5otpzez', // Your Template ID
      form.current,
      '6p6UvU1CcHCYTLY_K' // Your User ID
    )
    .then((result) => {
      alert("Success");
    }, (error) => {
      alert('Failed to send the message, please try again');
    });
  };

  return (
    <div id="contact">
      <Container fluid className="contact-container">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="experience">
                <h1 className="text-center text-white heading-highlight">
                  Contact
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="contact-info">
              {/* Contact Information */}
              <Row className="contact-item">
                <Col>
                  <div className='icon'>
                    <CallIcon className="contact-icon" />
                    <div>
                      <h5>Phone</h5>
                      <p>+91 9924351355</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="contact-item">
                <Col>
                  <div className='icon'>
                    <EmailIcon className="contact-icon" />
                    <div>
                      <h5>Email</h5>
                      <p>kachaliyaurvashi@gmail.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="contact-item">
                <Col>
                  <div className='icon'>
                    <LinkedInIcon className="contact-icon" />
                    <div>
                      <h5>LinkedIn</h5>
                      <p>
                        <a 
                          href="https://www.linkedin.com/in/urvashi-kachaliya-552791229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{color:"inherit",textDecoration:"none"}}
                        >
                          LinkedIn Profile
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="contact-item">
                <Col>
                  <div className='icon'>
                    <GitHubIcon className="contact-icon" />
                    <div>
                      <h5>GitHub</h5>
                      <p>
                        <a 
                          href="https://github.com/UrvashiKachaliya" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{color:"inherit",textDecoration:"none"}}
                        >
                          GitHub Profile
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Card className='cards'>
                <Card.Body>
                  <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        name="user_email" // Required for EmailJS
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group controlId="formSubject" className="mt-3">
                      <Form.Control
                        type="text"
                        name="subject" // Required for EmailJS
                        placeholder="Enter subject"
                      />
                    </Form.Group>
                    <Form.Group controlId="formMessage" className="mt-3">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message" // Required for EmailJS
                        placeholder="Your message"
                      />
                    </Form.Group>
                    <button className='submit-btn w-100 mt-4' type="submit">SUBMIT</button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
