import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Styles/Skills.css";
import html from "../Assets/html.jpeg";
import css from "../Assets/css.jpeg";
import js from "../Assets/js.jpeg";
import bootstrap from "../Assets/bootstrap.jpeg";
import react from "../Assets/react.jpeg";
import redux from "../Assets/redux.jpeg";

export default function Skills() {
  return (
    <div id="skills">
      <Container fluid className='bg-black'>
        <Container className='pb-5'>
          <Row>
            <Col lg={12}>
              <div className="experience">
                <h1 className="text-center text-white heading-highlight">
                  Skills
                </h1>
              </div>
            </Col>
          </Row>

          <Row className='box-row'>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={html} alt="HTML" className="skill-image"/>
                <h5 className='tech'>HTML</h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={css} alt="CSS" className="skill-image"/>
                <h5 className='tech'>CSS</h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={js} alt="JavaScript" className="skill-image"/>
                <h5 className='tech'>JavaScript</h5>
              </div>
            </Col>
          </Row>

          <Row className='box-row'>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={bootstrap} alt="Bootstrap" className="skill-image"/>
                <h5 className='tech'>Bootstrap</h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={react} alt="React" className="skill-image"/>
                <h5 className='tech'>React</h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={12} className='boxes text-center'>
              <div className='box-one'>
                <img src={redux} alt="Redux" className="skill-image"/>
                <h5 className='tech'>Redux</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
