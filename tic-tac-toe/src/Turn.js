import React from "react";

const Turn = props => {
  const { history, stepNum, ...other } = props;
  const turns = history.map((step, turn) => {
    const clicks = step.clicks;
    
    let desc = turn
      ? "Turn #" + turn + " "
      : "Start Game";

    const btn_highlight = stepNum === turn ? "btn-primary" : "btn-secondary";
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
