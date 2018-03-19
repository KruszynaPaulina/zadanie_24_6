import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
  	<button className="Player__button Player__button--remove" onClick={() => props.onPlayerRemove()} >X</button>
    <span className="Player__name">{props.name}</span>
    <div className="Player__buttons">
    	<button className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</button>
  		<span className="Player__score">{props.score}</span>
  		<button className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</button>
  	</div>
  </li>
);

export default Player;