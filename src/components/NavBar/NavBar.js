import React from 'react';
import Header from './Header';
import QuizzesButton from './QuizzesButton';
import SignOutButton from './SignOutButton';

function NavBar(props) {
  const navStyles = {
    display: "flex",
    backgroundColor: "azure",
    alignItems: "center",
    padding: "1em"
  }
  return (
    <div style={navStyles}>
      <Header/>
      <QuizzesButton/>
      <SignOutButton/>
    </div>
  );
}

export default NavBar;