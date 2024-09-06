import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/About.css";
import image from "../Assets/about.avif";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div id="about">
      <Container fluid className="bg-black">
        <Container>
          <Row>
            <Col lg={7} className="p-5">
              <h1 className="text-white">Who Am I?</h1>
              <div className="content py-4">
  <p>
    <span className="highlight-text">Hey Folks</span>, I'm Urvashi Kachaliya, a Software Developer with six months of hands-on experience in 
    <span className="highlight-text"> HTML, CSS, JavaScript, and React.</span>
  </p>
  <p>
    I have a passion for building visually appealing and functional web applications, always striving for excellence in every project. My journey in tech is driven by curiosity and a commitment to continuous learning. I enjoy collaborating with others to create impactful solutions that make a difference.
  </p>
</div>

            </Col>
            <Col lg={5} className="about-img">
              <div className="text-center">
                <img src={image} alt="About" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="experience">
                <h1 className="text-center text-white heading-highlight">
                  Experience
                </h1>
              </div>
              <div className="experience-one">
                <div className="details-one">
                  <h3 className="highlight-text">
                    Front-end Trainee | Spectrics Solutions
                  </h3>
                  <p className="date">Aug 2023 - Jan 2024</p>
                </div>
                <p className="details-two">I design and develop full-stack web applications, create and manage MongoDB databases, and build RESTful APIs using Node.js and Express.js. I also collaborate with team members to ensure high-quality software delivery.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
