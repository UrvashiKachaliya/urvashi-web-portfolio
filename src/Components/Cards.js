import React from 'react'
import { Button, Card } from 'react-bootstrap'
import image from "../Assets/store.JPG"
import "../Styles/Cards.css";



export default function Cards(props) {
  return (
    <div>
        <Card className='card1 mb-5' >
      <Card.Img variant="top" src={props.imageurl} />
      <Card.Body className='title'>
        <h4>{props.title}</h4>
        <p className='description'>
          { props.description}
        </p>
        <div className='option-btn'>
        <Button variant="primary" className='option-one' href={props.viewLink} target="_blank">View</Button>
        <Button variant="primary" className='option-two' href={props.codeLink} target="_blank">Code</Button>

        </div>
      </Card.Body>
    </Card>
      
    </div>
  )
}
