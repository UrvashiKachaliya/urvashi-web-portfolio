import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from './Cards'
import image1 from "../Assets/weather.png";
import image2 from "../Assets/fruitstore.png";
import image3 from "../Assets/image explorer.png"
import image4 from "../Assets/calculator.png"
import image5 from "../Assets/notekeeper.png"
import image6 from "../Assets/todo.png"



export default function Project() {
  return (
    <div id='projects'>
      <Container fluid className='bg-black'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="experience">
                <h1 className="text-center text-white heading-highlight">
                  My Projects
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="React Calculator"
                description="A sleek calculator built with React, featuring a minimalistic design and essential arithmetic functions. Perfect for quick calculations with a modern touch."
                imageurl={image4}
                viewLink="https://react-calc-snowy.vercel.app/"
                codeLink="https://github.com/UrvashiKachaliya/ReactCalc/tree/main/public"
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="To-Do List App"
                description="A dynamic to-do list application created using React hooks. It offers real-time updates and a user-friendly interface to manage daily tasks effectively."
                imageurl={image6}
                viewLink="https://simple-todo-hooks.vercel.app/"
                codeLink="https://github.com/UrvashiKachaliya/simple-todo-hooks/tree/main/public"
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="Weather App"
                description="An interactive weather application that fetches data using the REST API. Provides real-time weather updates with a clean and intuitive interface."
                imageurl={image1}
                viewLink=""
                codeLink=""

              />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="Image Explorer"
                description="A versatile image explorer app utilizing the Google API to search and display images. Offers a seamless experience for discovering visual content."
                imageurl={image3}
                viewLink=""
                codeLink=""
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="Note Keeper"
                description="A simple and efficient note-taking application that helps you organize thoughts and ideas with ease. Built to provide a clean and straightforward note management experience."
                imageurl={image5}
                viewLink="https://react-note-keeper-rho.vercel.app/"
                codeLink="https://github.com/UrvashiKachaliya/react-note-keeper/tree/main/public"

              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Cards 
                title="Fruit Store"
                description="A functional e-commerce site for buying fruits, featuring a responsive design and a user-friendly interface. Built with React and Redux for a smooth shopping experience."
                imageurl={image2}
                viewLink="https://fruit-store-pi.vercel.app/"
                codeLink="https://github.com/UrvashiKachaliya/Fruit_Store/tree/main/public"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
