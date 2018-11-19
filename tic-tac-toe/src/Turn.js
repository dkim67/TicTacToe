import React from "react";

const Turn = props => {
  const { history, stepNumber, ...other } = props;
  const turns = history.map((step, turn) => {
    const clickIndex = step.clickIndex;
    const col = Math.floor(clickIndex % 3),
      row = Math.floor(clickIndex / 3),
      clickPosition = "(row:" + row + ", col:" + col + ")";
    let desc = turn
      ? "Go to turn #" + turn + " " + clickPosition
      : "Go to game start";

    const btn_highlight = stepNumber === turn ? "btn-primary" : "btn-secondary";
    return (
      <li key={turn}>
        <button
          className={"btn " + btn_highlight + " btn-block"}
          onClick={() => other.onClick(turn)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game-info__turns">
      <ol className="list-turns list-unstyled">{turns}</ol>
    </div>
  );
};

export default Turn;
