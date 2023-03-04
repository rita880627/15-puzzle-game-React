import React from "react";
import Board from "./Board";
import "./styles.css";

class App extends React.Component {
  handleSolveCallback = () => {
    alert("CONGRATULATIONS! You solved the Puzzle!");
  };

  render() {
    const initialConfiguration = [
      1,
      2,
      0,
      4,
      5,
      6,
      3,
      8,
      9,
      10,
      7,
      12,
      13,
      14,
      11,
      15
    ];

    return (
      <div className="App">
        <Board
          initialConfiguration={initialConfiguration}
          onSolveCallback={this.handleSolveCallback}
        />
      </div>
    );
  }
}

export default App;
