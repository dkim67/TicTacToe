import React from "react";
import Square from "./Square";

const Board = props => {
  const { cells, squares, ...other } = props,
    ArrayRows = [0, 1, 2];
  let counter = 1;

  return (
    <div className="board">
      {" "}
      {ArrayRows.map(row => (
        <div key={row.toString()} className="boardRow">
          {cells.slice(row * 3, counter++ * 3).map(cellID => (
            <Square
              key={cellID.toString()}
              value={squares[cellID]}
              onClick={() => other.onClick(cellID)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
