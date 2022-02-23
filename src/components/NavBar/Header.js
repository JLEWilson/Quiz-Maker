import React from 'react';

function Header(props) {
  const headerStyles = {
    marginRight: "auto",
    marginLeft: "2em",
    alignItems: "center"
  }
  return (
    <div style={headerStyles}>
      <h2>Quiz Maker</h2>
    </div>
    );
}

export default Header;