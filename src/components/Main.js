import React from "react";
import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };
//takes the users name
  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };
//this shows the message when user finishes the game
  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({showEndGame: boolean});
    }
  };
  render() {
    const { showLogin, name, score, showEndGame} = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score}/>
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;