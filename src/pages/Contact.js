
import ReactDOM from "react-dom/client";
import {  Text } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contact() {
  return ( <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter your Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="surname" placeholder="Surname" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="age" placeholder="Age" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicDate">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    
  );
}

