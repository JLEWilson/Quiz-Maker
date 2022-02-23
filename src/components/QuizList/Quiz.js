import React from "react";
import PropTypes from "prop-types";

function Quiz(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h1>{props.name}</h1>
      </div>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, 
  whenQuizClicked: PropTypes.func 
};

export default Quiz;