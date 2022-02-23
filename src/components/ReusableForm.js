import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from 'react-bootstrap'

function ReusableForm(props) {
  return (
    <Form onSubmit={props.formSubmissionHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control type="text" placeholder="Quiz Name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" name="question" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Option 1</Form.Label>
        <Form.Control type="text" placeholder="option 1" name="option1" />
        <Form.Group className="mb-3">
          <Form.Label>Option 2</Form.Label>
          <Form.Control type="text" placeholder="option 2" name="option2" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Option 3</Form.Label>
          <Form.Control type="text" placeholder="option 1" name="option3" />
        </Form.Group>
      </Form.Group>
    <Button variant="success" type="submit">{props.buttonText}</Button>
    <Button variant="warning" onClick={() => props.cancel()}>Cancel</Button>
    </Form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;