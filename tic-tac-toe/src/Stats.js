import React from 'react';

const Stats = props => {
	const { squares, xIsNext } = props,
		winner = calculateWinner(squares),
		effect = winner?'bounce':''; 
	let stats;  

	if(winner) {
		stats = 'Winner is: '+ winner;
	}else{
		stats = 'Next player is: '+ (xIsNext?'x':'o');
	}
	
	
	return(
		<div className="game-info__status">
			<div className={'stats '+effect}>{stats}</div>
  		</div>
	); 
}

export default Stats;

