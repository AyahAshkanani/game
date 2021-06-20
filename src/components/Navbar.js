import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score} = this.props;
    return (
      <div className="navbar">
      <div className="name">{name}</div>
        <div className="game-title">Memory Game Cartoon Edition</div>
        <div className="score">Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;