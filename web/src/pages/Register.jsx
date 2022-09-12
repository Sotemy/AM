import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Card, Button, Form } from "react-bootstrap"
import axios from "axios"


export const Register = () => {

    const [state, setState] = React.useState([]);

    const addToState = (id, value) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const onSubmit = async () => {
        const response = await axios.post("http://localhost:4000/auth/register", state)
        if (response.status === 201) {
            return window.location.reload(false)
        }
    }

    return (
        <Card>
            <Card.Header as="h3">Login</Card.Header>
            <Card.Body>
                <Card.Title>Please, log in to countinue</Card.Title>
                <Card.Text>
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { addToState(e.target.id, e.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={(e) => { addToState(e.target.id, e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { addToState(e.target.id, e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password again" onChange={(e) => { addToState(e.target.id, e.target.value) }} />
                        </Form.Group>
                        <Button variant="primary" style={{ margin: 1 + "%" }} onClick={onSubmit}>Register</Button>
                        <LinkContainer to="/login">
                            <Button variant="outline-primary" style={{ margin: 1 + "%" }}>Already have an account? Log in</Button>
                        </LinkContainer>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
