import React from "react";
import QuizControl from "./QuizControl";
import SignInForm from "./SignInForm";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function App(){
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/signin">
            <SignInForm />
          </Route>
          <Route path="/">
            <QuizControl />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;