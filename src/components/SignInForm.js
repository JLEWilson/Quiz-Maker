import React from 'react';
import firebase from 'firebase/compat/app';
import { Row, Card, Col, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function SignInForm(props) {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  return (
    <React.Fragment>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Sign Up</Card.Title>
                  <Form onSubmit={doSignUp}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" name="email" />
                      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    <Button variant="success" type="submit">Sign me up!</Button>
                  </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Sign In</Card.Title>
                  <Form onSubmit={doSignIn}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" name="signinEmail" />
                      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="signinPassword" />
                    </Form.Group>
                    <Button variant="warning" type="submit">Sign me in!</Button>
                  </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr/>
        <Button variant="danger" onClick={doSignOut}>Sign me out!</Button>
    </React.Fragment>
  );
}

export default withRouter(SignInForm);