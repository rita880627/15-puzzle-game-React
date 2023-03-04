import React, { useState, useEffect } from "react";

export default function Board({ initialConfiguration, onSolveCallback }) {
  const [tiles, setTiles] = useState(initialConfiguration);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (isPuzzleSolved(tiles)) {
      setSolved(true);
    }
    if (solved) {
      onSolveCallback();
    }
  }, [tiles, solved, onSolveCallback]);

  const isPuzzleSolved = (tiles) => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const handleClick = (target) => {
    const index0 = tiles.indexOf(0);
    const indexTarget = tiles.indexOf(target);
    const temp = [...tiles];
    if (
      indexTarget - index0 === 4 ||
      indexTarget - index0 === -4 ||
      indexTarget - index0 === 1 ||
      indexTarget - index0 === -1
    ) {
      const temTile = temp[index0];
      temp[index0] = temp[indexTarget];
      temp[indexTarget] = temTile;
    }
    setTiles(temp);
  };

  return (
    <div className="board">
      {tiles.map((tile) => (
        <div
          key={tile}
          className={tile !== 0 ? "tile" : "empty-tile"}
          onClick={() => {
            handleClick(tile);
          }}
        >
          {tile !== 0 ? tile : ""}
        </div>
      ))}
    </div>
  );
}

// class Board extends React.Component {
//   state = {
//     tiles: this.props.initialConfiguration,
//     solved: false,
//   };

//   handleClick = (index) => {
//     const { tiles } = this.state;
//     const emptyIndex = tiles.indexOf(0);
//     const tileIndex = index;

//     if (this.isMoveValid(emptyIndex, tileIndex)) {
//       const newTiles = [...tiles];
//       [newTiles[emptyIndex], newTiles[tileIndex]] = [
//         newTiles[tileIndex],
//         newTiles[emptyIndex],
//       ];
//       this.setState({ tiles: newTiles });
//       if (this.isPuzzleSolved(newTiles) && !this.state.solved) {
//         this.setState({ solved: true });
//         setTimeout(() => {
//           alert('solved');
//         }, 500);
//       }
//     }
//   };

//   isMoveValid = (emptyIndex, tileIndex) => {
//     const rowSize = Math.sqrt(this.state.tiles.length);
//     const emptyRow = Math.floor(emptyIndex / rowSize);
//     const emptyCol = emptyIndex % rowSize;
//     const tileRow = Math.floor(tileIndex / rowSize);
//     const tileCol = tileIndex % rowSize;
//     const rowDiff = Math.abs(emptyRow - tileRow);
//     const colDiff = Math.abs(emptyCol - tileCol);

//     return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
//   };

//   isPuzzleSolved = (tiles) => {
//     for (let i = 0; i < tiles.length - 1; i++) {
//       if (tiles[i] !== i + 1) {
//         return false;
//       }
//     }
//     return true;
//   };

//   render() {
//     return (
//       <div className="board">
//         {this.state.tiles.map((value, index) => (
//           <div
//             key={index}
//             className={`tile ${value === 0 ? 'empty' : ''}`}
//             onClick={() => this.handleClick(index)}
//           >
//             {value !== 0 ? value : ''}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Board;
