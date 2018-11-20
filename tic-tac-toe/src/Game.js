import React from 'react';
import Board from './Board';
import Stats from './Stats'
import Turn from './Turn'

class Game extends React.Component {
	
	constructor(props){
		super(props); 
		this.state = {
			history: [{ 
				squares:Array(9).fill(null), 
				clicks:null  
			}],
			xTurn: true,
      		stepNum: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.updateTurn = this.updateTurn.bind(this);
	}

	
	handleClick(i){
		const history = this.state.history.slice(0, this.state.stepNum + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if(squares[i] || calcWinner(squares)) {
			return;
		}
		squares[i] = this.state.xTurn?'x':'o';
		this.setState({
			history		: history.concat([{ squares:squares, clicks:i }]),
      		stepNum	: history.length,
			xTurn		: !this.state.xTurn
		});
	}
  	
  	
	updateTurn(step) {
	    this.setState({
	      stepNum: step,
	      xTurn: (step % 2) === 0
	    });
	}
	
	
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNum];
		const squares = current.squares.slice();

		return(
			<div className="game">
				<div className="game-board">
					<Board squares={squares} onClick={this.handleClick} cells={[0,1,2,3,4,5,6,7,8]} />
				</div>
				<div className="game-info">
					<Stats squares={ squares } xTurn={ this.state.xTurn } />
					<Turn history={ this.state.history } stepNum={ this.state.stepNum } onClick={this.updateTurn} /> 
				</div>
			</div>
		);
	}
}

function calcWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Game;