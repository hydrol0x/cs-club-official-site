import { useRef } from 'react'
import { Redirect, useNavigate } from 'react-router-dom'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

import { useAuth } from '../api/AuthContext'

export default function Signin() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function handleEvent(e) {
    e.preventDefault();
    // console.log(emailRef.current.value, passwordRef.current.value)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    register(email, password)
    navigate('/')
  }

  return (
    <>
      {/* Put this inside a card and make it look pretty*/}
      <Header />
      <Container >
        <Row >
          <Col >
            <Card className='mx-auto mt-5' style={{ width: '25rem'}}>
              <Card.Header as="h4" className='text-center'>Create your account</Card.Header>
              <Card.Body > 
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                  </Form.Group>
                </Form>   
                <Button variant="primary" onClick={handleEvent} type="submit"> Register </Button>
              </Card.Body> 
              <Card.Footer >
                <Card.Link href="/signin" style={{ textDecoration:'none' }}> Have an Account? Sign In. </Card.Link>
              </Card.Footer>
            </Card> 
          </Col>
        </Row>
      </Container>
    </>
  )
}
